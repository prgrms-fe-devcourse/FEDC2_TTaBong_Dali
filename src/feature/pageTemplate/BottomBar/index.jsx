import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as S from './style';
import Icon from '../../../components/Icon';

// page props로 'mainFeed', 'rank', 'search', 'user'가 들어온다고 가정하겠습니다.
const BottomBar = ({ page }) => {
  return (
    <S.BottomBarContainer>
      <S.IconContainer>
        <Link to="/">
          <Icon
            name={page === 'mainFeed' ? 'listFill' : 'listLine'}
            alt="리스트 아이콘"
          />
        </Link>
        <Link to="/rank">
          <Icon
            name={page === 'rank' ? 'rankFill' : 'rankLine'}
            alt="랭킹 아이콘"
          />
        </Link>
      </S.IconContainer>
      <S.TTaBongContainerBox>
        <Link to="/TTaBong">
          <Icon name="TTaBongWhite" alt="따봉 아이콘" />
        </Link>
      </S.TTaBongContainerBox>
      <S.IconContainer>
        <Link to="/search">
          <Icon
            name={page === 'search' ? 'searchFill' : 'searchLine'}
            alt="검색 아이콘"
          />
        </Link>
        <Link to="/userProfile">
          <Icon
            name={page === 'user' ? 'userFill' : 'userLine'}
            alt="유저 아이콘"
          />
        </Link>
      </S.IconContainer>
    </S.BottomBarContainer>
  );
};
BottomBar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default BottomBar;
