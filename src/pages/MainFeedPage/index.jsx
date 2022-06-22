import React, { useState, useEffect } from 'react';
import * as S from './style';
import PageTemplate from '../../feature/pageTemplate/PageTemplate';
import Banner from '../../feature/pageTemplate/Banner';
import MainCard from '../../feature/cards/MainCard';

import DummyData from '../../assets/data/dummyData';
import { getChannelPosts } from '../../apis/index';
import { useScrollDown } from '../../hooks/useScrollDown';
import { useChannelContext } from '../../contexts/ChannelProvider';

const MainFeedPage = () => {
  const { channel } = useChannelContext();
  const { channelId, channelName } = channel;

  const [posts, setPosts] = useState([]);
  const [target, setTarget] = useState(null);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  const [ref, isScrollDown] = useScrollDown();

  const LIMIT_NUM = 10;

  const getNextPosts = async () => {
    setLoading(true);
    await getChannelPosts(channelId, offset, LIMIT_NUM)
      .then((response) => {
        if (response === []) {
          return;
        }
        const newPosts = [...posts, ...response];
        setPosts(newPosts);
      })
      .then(() => {
        setOffset(offset + LIMIT_NUM);
      });
    setLoading(false);
  };

  const onIntersect = async (entries, observer) => {
    if (posts.length !== offset) {
      return;
    }
    await entries.forEach((entry) => {
      if (entry.isIntersecting && !loading) {
        observer.unobserve(entry.target);

        getNextPosts();
        setTarget(null);
        observer.observe(entry.target);
      }
    });
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.3,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  // 최초 랜더링
  useEffect(() => {
    getNextPosts();
  }, []);

  return (
    <PageTemplate page="mainFeed">
      <S.MainFeedPageContainer
        ref={ref}
        className={!isScrollDown ? 'bannerShown' : null}
      >
        <Banner isScrollDown={isScrollDown} />
        {posts.map((post, idx) => (
          <S.MainCardWrapper key={post._id}>
            {posts.length - 1 === idx ? (
              <div ref={setTarget}>
                <MainCard post={post} />
              </div>
            ) : (
              <MainCard post={post} />
            )}
          </S.MainCardWrapper>
        ))}
        <S.Announce>모든 카드를 불러왔습니다</S.Announce>
      </S.MainFeedPageContainer>
    </PageTemplate>
  );
};

export default MainFeedPage;
