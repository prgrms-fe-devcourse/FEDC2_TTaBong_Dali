import React, { useState } from 'react';
import * as S from './style';
import PageTemaplte from '../../feature/pageTemplate/PageTemplate';
import { Tab, TabItem, useTab } from '../../components/Tab';
import BaseCardContainer from '../../components/BaseCardContainer';
import DummyData from '../../assets/data/dummyData';

const SearchPage = () => {
  const { Users, Posts } = DummyData;

  const [currentActive, setCurrentActive] = useTab();
  const [items, setItems] = useState(Posts);

  const handleTabItemClick = (index) => {
    setCurrentActive(index);
    setItems(index === 0 ? Users : Posts);
  };

  return (
    <PageTemaplte page="search">
      <S.SearchPageContainer>
        <S.InputWrapper>
          <input />
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
          <BaseCardContainer>
            {currentActive === 0 ? '사용자' : '칭찬카드'}
          </BaseCardContainer>
        </S.BaseCardWrapper>
      </S.SearchPageContainer>
    </PageTemaplte>
  );
};

export default SearchPage;
