import React, { useState, useEffect } from 'react';
import * as S from './style';
import PageTemplate from '../../feature/pageTemplate/PageTemplate';
import Banner from '../../feature/pageTemplate/Banner';
import MainCard from '../../feature/cards/MainCard';

import DummyData from '../../assets/data/dummyData';
import { getChannelPosts } from '../../apis/index';
import { useScrollDown } from '../../hooks/useScrollDown';

const MainFeedPage = () => {
  const [posts, setPosts] = useState([]);
  const [target, setTarget] = useState(null);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  const [ref, isScrollDown] = useScrollDown();

  const CHANNEL_ID = '62a19123d1b81239d875d20d';
  const LIMIT_NUM = 10;

  const getNextPosts = () => {
    setLoading(true);
    getChannelPosts(CHANNEL_ID, offset, LIMIT_NUM)
      .then((response) => {
        if (response === []) {
          console.log('no more cards to load');
          return;
        }
        const newPosts = [...posts, ...response];
        if (newPosts === []) {
          alert(
            '현재 서버에 카드가 하나도 없는 관계로 더미데이터를 불러옵니다.',
          );
          setPosts(DummyData.Posts);
          return;
        }
        setPosts(newPosts);
      })
      .then(() => {
        setOffset(offset + LIMIT_NUM);
      });
    setLoading(false);
  };

  const onIntersect = async (entries, observer) => {
    if (posts.length !== offset) {
      console.log('no more cards to load');
      return;
    }
    entries.forEach((entry) => {
      if (entry.isIntersecting && !loading) {
        observer.unobserve(entry.target);
        getNextPosts();
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
      </S.MainFeedPageContainer>
    </PageTemplate>
  );
};

export default MainFeedPage;
