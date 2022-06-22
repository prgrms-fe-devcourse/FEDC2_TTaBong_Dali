import React, { useState, useEffect } from 'react';
import * as S from './style';
import PageTemaplte from '../../feature/pageTemplate/PageTemplate';
import { Tab, TabItem, useTab } from '../../components/Tab';
import BaseCardContainer from '../../components/BaseCardContainer';
import { getAllUsers, getChannelPosts } from '../../apis/index';
import DummyData from '../../assets/data/dummyData';
import MainCard from '../../feature/cards/MainCard';
import UserInfoItem from '../../components/UserInfoItem';
import Constants from '../../commons/constants';
import Spinner from '../../components/Spinner';
import { useChannelContext } from '../../contexts/ChannelProvider';

const SearchPage = () => {
  const { channel } = useChannelContext();
  const { channelName, channelId } = channel;

  const [currentActive, setCurrentActive] = useTab();
  const [items, setItems] = useState({
    users: [...DummyData.Users],
    posts: [...DummyData.Posts],
  });
  const [searched, setSearched] = useState({
    users: [],
    posts: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      const users = await getAllUsers();
      const posts = await getChannelPosts(channelId);

      const coinUsers = users.map((user) => {
        const receivedPosts = posts
          .map((post) => JSON.parse(post.title))
          .filter(({ receiver }) => receiver._id === user._id);

        const TTaBongedPosts = receivedPosts.filter(
          ({ type }) => type === 'TTaBong',
        );

        const BigTTaBongedPosts = receivedPosts.filter(
          ({ type }) => type === 'BigTTaBong',
        );

        const coinCount = TTaBongedPosts.length + BigTTaBongedPosts.length * 2;

        return { ...user, coinCount };
      });

      setItems({ users: coinUsers, posts });
      setSearched({ users: coinUsers, posts });
      setLoading(false);
    };

    fetchInitialData();
  }, []);

  const handleTabItemClick = (index) => {
    setCurrentActive(index);
  };

  const handleSubmit = (keyword) => {
    const { users, posts } = items;

    const searchedUsers = users.filter((user) =>
      user.fullName.startsWith(keyword),
    );

    const searchedPosts = posts.filter((post) =>
      JSON.parse(post.title).content.includes(keyword),
    );

    setSearched({
      users: searchedUsers,
      posts: searchedPosts,
    });
  };

  return (
    <PageTemaplte page="search">
      {loading ? (
        <Spinner />
      ) : (
        <S.SearchPageContainer>
          <S.InputWrapper>
            <S.SearchInputForm
              name="search"
              version="search"
              placeholder={`검색할 ${
                currentActive === 0 ? '사용자 이름' : '칭찬 내용'
              }을 입력하세요`}
              onSubmit={handleSubmit}
            />
          </S.InputWrapper>
          <S.TabWrapper>
            <Tab
              currentActive={currentActive}
              handleTabItemClick={handleTabItemClick}
            >
              <TabItem>사용자</TabItem>
              <TabItem>칭찬카드</TabItem>
            </Tab>
          </S.TabWrapper>
          <S.BaseCardWrapper>
            <BaseCardContainer overflow="auto">
              {currentActive === 0
                ? searched.users.map((user) => (
                    <S.ItemWrapper key={user._id}>
                      <UserInfoItem
                        userName={user.fullName}
                        TTaBongCount={user.posts.length}
                        coinCount={user.coinCount}
                      />
                    </S.ItemWrapper>
                  ))
                : searched.posts.map((post) => (
                    <S.ItemWrapper>
                      <MainCard post={post} width="100%" />
                    </S.ItemWrapper>
                  ))}
            </BaseCardContainer>
          </S.BaseCardWrapper>
        </S.SearchPageContainer>
      )}
    </PageTemaplte>
  );
};

export default SearchPage;
