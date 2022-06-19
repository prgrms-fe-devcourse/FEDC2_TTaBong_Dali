import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
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
  const [lastPost, setLastPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  const [ref, isScrollDown] = useScrollDown();
  const [last, inView] = useInView();

  const CHANNEL_ID = '62a19123d1b81239d875d20d';

  // inView값이 변경될 때 마다 작동해야하는 useEffect
  // 어째서인지 작동이 안되고 있다.....젭알..왜 안되...
  useEffect(() => {
    console.log('scroll ended');
    if (inView) {
      console.log('scroll is end!');
    }
  }, [inView]);

  // 최초 랜더링
  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      console.log('start loading');

      await getChannelPosts(CHANNEL_ID, offset).then((response) => {
        setPosts(response || Posts);
        console.log('response : ', response);
      });
      // 왜 로딩은 성공적으로 되었는데 post는 제대로 나오지 않는가....
      console.log('posts : ', posts);
      console.log('loaded posts successfully');

      setLoading(false);
      console.log('finish loading');
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
              <div>
                <MainCard post={post} ref={last} />
                <div>hello</div>
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
