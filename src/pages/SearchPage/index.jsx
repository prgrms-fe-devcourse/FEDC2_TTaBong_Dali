import React, { useState, useEffect } from 'react';
import * as S from './style';
import PageTemaplte from '../../feature/pageTemplate/PageTemplate';
import { Tab, TabItem, useTab } from '../../components/Tab';
import BaseCardContainer from '../../components/BaseCardContainer';
import {
  getAllUsers,
  getChannelPosts,
  getSpecificChannel,
} from '../../apis/index';
import DummyData from '../../assets/data/dummyData';
import MainCard from '../../feature/Cards/MainCard';
import UserInfoItem from '../../components/UserInfoItem';
import Constants from '../../commons/constants';

const SearchPage = () => {
  const [currentActive, setCurrentActive] = useTab();
  const [items, setItems] = useState({
    users: [...DummyData.Users],
    posts: [...DummyData.Posts],
  });
  const [searched, setSearched] = useState({
    users: [],
    posts: [],
  });

  useEffect(() => {
    const fetchInitialData = async () => {
      const users = await getAllUsers(20);
      const channel = await getSpecificChannel(Constants.CHANNE_NAME);
      const posts = await getChannelPosts(channel._id);

      setItems({ users, posts });
    };

    fetchInitialData();
  }, []);

  const handleTabItemClick = (index) => {
    setCurrentActive(index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const keyword = e.target.search.value;
    if (keyword.length < 2) return;

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
      <S.SearchPageContainer>
        <S.InputWrapper>
          <S.SearchInputForm
            name="search"
            version="search"
            placeholder={`검색할 ${
              currentActive === 0 ? '사용자 이름' : '칭찬 내용'
            }을 입력하세요`}
            onSubmit={(e) => handleSubmit(e)}
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
                  <S.ItemWrapper>
                    <UserInfoItem
                      userName={user.fullName}
                      TTaBongCount={user.posts.length}
                    />
                  </S.ItemWrapper>
                ))
              : searched.posts.map((post) => (
                  <S.ItemWrapper>
                    <MainCard post={post} />
                  </S.ItemWrapper>
                ))}
          </BaseCardContainer>
        </S.BaseCardWrapper>
      </S.SearchPageContainer>
    </PageTemaplte>
  );
};

export default SearchPage;
