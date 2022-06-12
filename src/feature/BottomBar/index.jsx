import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import Icon from '../../components/Icon';

const BottomBar = ({ page = 'mainFeed' }) => {
  const pageIconList = {
    mainFeed: [
      { icon: 'list', type: 'Fill', alt: 'list-Fill' },
      { icon: 'ranking', type: 'Line', alt: 'ranking-Line' },
      { icon: 'search', type: 'Line', alt: 'search-Line' },
      { icon: 'user', type: 'Line', alt: 'user-Line' },
    ],
    ranking: [
      { icon: 'list', type: 'Line', alt: 'list-Line' },
      { icon: 'ranking', type: 'Fill', alt: 'ranking-Fill' },
      { icon: 'search', type: 'Line', alt: 'search-Line' },
      { icon: 'user', type: 'Line', alt: 'user-Line' },
    ],
    search: [
      { icon: 'list', type: 'Line', alt: 'list-fill' },
      { icon: 'ranking', type: 'Line', alt: 'ranking-Line' },
      { icon: 'search', type: 'Fill', alt: 'search-Fill' },
      { icon: 'user', type: 'Line', alt: 'user-Line' },
    ],
    user: [
      { icon: 'list', type: 'Line', alt: 'list-Line' },
      { icon: 'ranking', type: 'Line', alt: 'ranking-Line' },
      { icon: 'search', type: 'Line', alt: 'search-Line' },
      { icon: 'user', type: 'Fill', alt: 'user-Fill' },
    ],
  };

  const iconList = pageIconList[page];

  return (
    <S.BottomBarContainer>
      <S.IconContainer>
        <Icon
          icon={iconList[0].icon}
          type={iconList[0].type}
          alt={iconList[0].alt}
        />
        <Icon
          icon={iconList[1].icon}
          type={iconList[1].type}
          alt={iconList[1].alt}
        />
      </S.IconContainer>
      <S.TTaBongContainerBox>
        <Icon icon="TTaBong" type="" alt="TTaBong" />
      </S.TTaBongContainerBox>
      <S.IconContainer>
        <Icon
          icon={iconList[2].icon}
          type={iconList[2].type}
          alt={iconList[2].alt}
        />
        <Icon
          icon={iconList[3].icon}
          type={iconList[3].type}
          alt={iconList[3].alt}
        />
      </S.IconContainer>
    </S.BottomBarContainer>
  );
};
BottomBar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default BottomBar;
