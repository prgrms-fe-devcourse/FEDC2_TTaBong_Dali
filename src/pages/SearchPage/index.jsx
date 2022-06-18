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

const SearchPage = () => {
  const [currentActive, setCurrentActive] = useTab();
  const [items, setItems] = useState({
    users: [...DummyData.Users],
    posts: [...DummyData.Posts],
  });
  const [searched, setSearched] = useState([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      const users = await getAllUsers(20);
      const testChannel = await getSpecificChannel('Test');
      const posts = await getChannelPosts(testChannel._id);

      setItems({ users, posts });
    };

    fetchInitialData();
  }, []);

  const handleTabItemClick = (index) => {
    setCurrentActive(index);
    console.log(items);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { users, posts } = items;
    const keyword = e.target.search.value;

    const searched =
      currentActive === 0
        ? users.filter((user) => user.fullName.startsWith(keyword))
        : posts.filter((post) =>
            JSON.parse(post.title).content.includes(keyword),
          );

    setSearched(searched);
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
              ? searched.map((item) => (
                  <S.ItemWrapper key={item._id}>
                    <UserInfoItem
                      userName={item.fullName}
                      TTaBongCount={item.posts.length}
                    />
                  </S.ItemWrapper>
                ))
              : searched.map((item) => (
                  <S.ItemWrapper key={item._id}>
                    <MainCard post={item} />
                  </S.ItemWrapper>
                ))}
          </BaseCardContainer>
        </S.BaseCardWrapper>
      </S.SearchPageContainer>
    </PageTemaplte>
  );
};

export default SearchPage;
