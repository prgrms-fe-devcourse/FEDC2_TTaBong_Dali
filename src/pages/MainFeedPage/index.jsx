import React, { useState, useEffect } from 'react';
import * as S from './style';
import PageTemplate from '../PageTemplate';
import Banner from '../../feature/Banner';
import MainCard from '../../feature/MainFeed/MainCard';

import DummyData from '../../assets/data/dummyData';

const MainFeedPage = () => {
  const { Posts, Users } = DummyData;
  const [posts, setPosts] = useState([]);

  // 후에 axios를 통해 Channel을 거쳐 post를 받아오는 작업 필요.
  useEffect(() => {
    setPosts(Posts);
  }, []);

  // MainCard에 들어갈 props : authorname, receiverName, commenCount, likeCount, likeReason, labelTypes
  // 저희 더미데이터에 label 타입에 관한 데이터가 들어있지 않네요..이건 또 어디에 넣죠 ㅜ 아마 type에 넣어야 할 것 같아요
  return (
    <S.MainFeedPageContainer>
      <PageTemplate page="mainFeed">
        <Banner />
        {posts.map((post) => {
          const { likes, comments, title, author } = post;
          const { type, receiver, content } = JSON.parse(title);
          const { fullName } = author;

          const receiverName = Users.map((user) => {
            if (user._id === receiver) return user.fullName;
          });

          return (
            <MainCard
              authorName={fullName}
              receiverName={receiverName}
              commenCount={comments.length}
              likeCount={likes.length}
              likeReason={content}
              // 라벨 타입은 일단 임시로 하드코딩 해 두었습니다...!!
              labelTypes={['warm', 'moved', 'praise']}
            />
          );
        })}
        <MainCard />
        <MainCard />
        <MainCard />
      </PageTemplate>
    </S.MainFeedPageContainer>
  );
};

export default MainFeedPage;
