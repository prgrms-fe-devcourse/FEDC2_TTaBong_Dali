import React from 'react';
import * as S from './style';
import PageTemaplte from '../../feature/pageTemplate/PageTemplate';
import { Tab, TabItem } from '../../components/Tab';
import BaseCardContainer from '../../components/BaseCardContainer';

const SearchPage = () => {
  return (
    <PageTemaplte page="search">
      <S.SearchPageContainer>
        <S.InputWrapper>
          <input />
        </S.InputWrapper>
        <S.TabWrapper>
          <Tab>
            <TabItem>사용자</TabItem>
            <TabItem>칭찬카드</TabItem>
          </Tab>
        </S.TabWrapper>
        <S.BaseCardWrapper>
          <BaseCardContainer>
            <p>hello</p>
          </BaseCardContainer>
        </S.BaseCardWrapper>
      </S.SearchPageContainer>
    </PageTemaplte>
  );
};

export default SearchPage;
