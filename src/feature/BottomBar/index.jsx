import React from 'react';

import { userIcon } from '../../assets/icon_user_line.svg';
import { rankingIcon } from '../../assets/icon_ranking_line.svg';

import * as S from './style';
import Icon from '../../components/Icon';

import PropTypes from 'prop-types';

// 1. 4개의 아이콘과 따봉아이콘이 담길 네모난 래퍼
// 2. 각 아이콘을 클릭시에 라우팅 처리를 해야함
// 3. 따봉 아이콘은 absolute를 통해 위치 조정
// 4. 바텀바는 스크롤을 내리더라도 움직이면 안됨
// emotion/styled에서 fixed를 적용하면 되지 않을까요? 좋은것 가습ㄴ다

//

const BottomBar = ({ src, iconList, TTaBongIcon }) => {
  return (
    <S.BottomBarContainer>
      <S.IconContainer>
        <Icon src={iconList[0]} />
        <Icon src={iconList[1]} />
      </S.IconContainer>
      <S.TTaBongContainerBox>
        <Icon src={TTaBongIcon} />
      </S.TTaBongContainerBox>
      <S.IconContainer>
        <Icon src={iconList[2]} />
        <Icon src={iconList[3]} />
      </S.IconContainer>
    </S.BottomBarContainer>
  );
};

BottomBar.propTypes = {};

export default BottomBar;
