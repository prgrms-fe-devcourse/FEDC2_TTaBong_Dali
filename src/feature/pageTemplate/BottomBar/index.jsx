import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as S from './style';
import Icon from '../../../components/Icon';
import { useAuthContext } from '../../../contexts/UserProvider';

const BottomBar = ({ page }) => {
  const { authUser } = useAuthContext();
  const { isAuth, userId } = authUser;

  return (
    <S.BottomBarContainer>
      <S.IconContainer>
        <Link to="/">
          <Icon
            name={page === 'mainFeed' ? 'listFill' : 'listLine'}
            alt="리스트 아이콘"
            size={18}
          />
        </Link>
        <Link to="/rank">
          <Icon
            name={page === 'rank' ? 'rankFill' : 'rankLine'}
            alt="랭킹 아이콘"
            size={18}
          />
        </Link>
      </S.IconContainer>
      <S.TTaBongContainerBox>
        <Link to="/TTaBong">
          <Icon name="TTaBongWhite" alt="따봉 아이콘" size={18} />
        </Link>
      </S.TTaBongContainerBox>
      <S.IconContainer>
        <Link to="/search">
          <Icon
            name={page === 'search' ? 'searchFill' : 'searchLine'}
            alt="검색 아이콘"
            size={18}
          />
        </Link>
        {isAuth ? (
          <Link to={`/userProfile/${userId}`}>
            <Icon
              name={page === 'user' ? 'userFill' : 'userLine'}
              alt="유저 아이콘"
              size={18}
            />
          </Link>
        ) : (
          <Link to="/login">
            <Icon
              name={page === 'user' ? 'userFill' : 'userLine'}
              alt="유저 아이콘"
              size={18}
            />
          </Link>
        )}
      </S.IconContainer>
    </S.BottomBarContainer>
  );
};
BottomBar.propTypes = {
  page: PropTypes.string,
};

export default BottomBar;
