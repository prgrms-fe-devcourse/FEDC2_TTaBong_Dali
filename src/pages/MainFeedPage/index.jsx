import React, { useState, useEffect } from 'react';
import * as S from './style';
import PageTemplate from '../../feature/pageTemplate/PageTemplate';
import Banner from '../../feature/pageTemplate/Banner';
import MainCard from '../../feature/Cards/MainCard';

import DummyData from '../../assets/data/dummyData';
import { getChannelPosts } from '../../apis/index';
import { useScrollDown } from '../../hooks/useScrollDown';

const MainFeedPage = () => {
  const { Posts } = DummyData;
  const [posts, setPosts] = useState([]);
  const [target, setTarget] = useState(null);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  const [ref, isScrollDown] = useScrollDown();

  const CHANNEL_ID = '62a19123d1b81239d875d20d';

  const getNextPosts = () => {
    setLoading(true);
    console.log('start loading');
    getChannelPosts(CHANNEL_ID, offset, 5)
      .then((response) => {
        if (response === []) {
          console.log('no more cards to load');
          return;
        }
        console.log(response);
        const newPosts = [...posts, ...response];
        setPosts(newPosts || Posts);
      })
      .then(() => {
        setOffset(offset + 5);
      });
    setLoading(false);
    console.log('end loading');
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
      console.log('observe is done');
    }
    return () => observer && observer.disconnect();
  }, [target]);

  // 최초 랜더링
  useEffect(() => {
    const getPosts = () => {
      getNextPosts();
    };
    getPosts();
  }, []);

  // 아래 ==는 되고 ===는 안되어서 일단 ==로 했습니다.
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
