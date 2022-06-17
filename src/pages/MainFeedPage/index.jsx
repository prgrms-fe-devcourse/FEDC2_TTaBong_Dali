import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import PageTemplate from '../PageTemplate';
import Banner from '../../feature/Banner';
import MainCard from '../../feature/MainFeed/MainCard';

import DummyData from '../../assets/data/dummyData';
import { useScrollDown } from '../../hooks/useScrollDown';

const MainFeedPage = () => {
  const { Posts, Users } = DummyData;
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
        {posts.map((post) => {
          const { likes, comments, title, author } = post;
          const { type, receiver, content } = JSON.parse(title);
          const { fullName } = author;

          const receiverName = Users.map((user) => {
            if (user._id === receiver) return user.fullName;
          });

          return (
            <Link to="/cardDetail" className="mainCard">
              <MainCard
                authorName={fullName}
                receiverName={receiverName}
                commenCount={comments.length}
                likeCount={likes.length}
                likeReason={content}
                // 라벨 타입은 일단 임시로 하드코딩 해 두었습니다...!!
                labelTypes={['warm', 'moved', 'praise']}
              />
            </Link>
          );
        })}
      </S.MainFeedPageContainer>
    </PageTemplate>
  );
};

export default MainFeedPage;
