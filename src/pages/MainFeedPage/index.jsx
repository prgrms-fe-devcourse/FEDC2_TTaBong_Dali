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

  const [ref, isScrollDown] = useScrollDown();

  const testAPI = async () => {
    const channelAPI = await getChannelPosts('62a19123d1b81239d875d20d');
    return channelAPI;
  };

  useEffect(() => {
    const testCall = async () => {
      const channelAPI = await testAPI();
      setPosts(channelAPI || Posts);
    };
    testCall();
  }, []);

  return (
    <PageTemplate page="mainFeed">
      <S.MainFeedPageContainer
        ref={ref}
        className={!isScrollDown ? 'bannerShown' : null}
      >
        <Banner isScrollDown={isScrollDown} />
        {posts.map((post) => (
          <S.MainCardWrapper key={post._id}>
            <MainCard post={post} />
          </S.MainCardWrapper>
        ))}
      </S.MainFeedPageContainer>
    </PageTemplate>
  );
};

export default MainFeedPage;
