import React, { useState, useEffect } from 'react';
import * as S from './style';
import PageTemplate from '../../feature/pageTemplate/PageTemplate';
import Banner from '../../feature/pageTemplate/Banner';
import MainCard from '../../feature/Cards/MainCard';

import DummyData from '../../assets/data/dummyData';
import { useScrollDown } from '../../hooks/useScrollDown';

const MainFeedPage = () => {
  const { Posts } = DummyData;
  const [posts, setPosts] = useState([]);

  const [ref, isScrollDown] = useScrollDown();

  // 후에 axios를 통해 Channel을 거쳐 post를 받아오는 작업 필요.
  useEffect(() => {
    setPosts(Posts);
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
