import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import Icon from '../../components/Icon';

// page props로 'mainFeed', 'ranking', 'search', 'user'가 들어온다고 가정하겠습니다.
const BottomBar = ({ page = 'mainFeed' }) => {
  return (
    <S.BottomBarContainer>
      <S.IconContainer>
        <Icon
          name={page === 'mainFeed' ? 'listFill' : 'listLine'}
          alt="리스트 아이콘"
        />
        <Icon
          name={page === 'ranking' ? 'rankingFill' : 'rankingLine'}
          alt="랭킹 아이콘"
        />
      </S.IconContainer>
      <S.TTaBongContainerBox>
        <Icon name="TTaBongWhite" alt="따봉 아이콘" />
      </S.TTaBongContainerBox>
      <S.IconContainer>
        <Icon
          name={page === 'search' ? 'searchFill' : 'searchLine'}
          alt="검색 아이콘"
        />
        <Icon
          name={page === 'user' ? 'userFill' : 'userLine'}
          alt="유저 아이콘"
        />
      </S.IconContainer>
    </S.BottomBarContainer>
  );
};
BottomBar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default BottomBar;
