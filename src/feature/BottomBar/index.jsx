import React from 'react';
import * as S from './style';
import Icon from '../../components/Icon';
import PropTypes from 'prop-types';


const BottomBar = ({ iconList, TTaBongIcon }) => {
  return (
    <S.BottomBarContainer>
      <S.IconContainer>
        <Icon src={iconList[0]} />
        <Icon src={iconList[1]} />
      </S.IconContainer>
      <S.TTaBongContainer>
        <S.TTaBongOuterContainer>
          <S.TTaBongInnerContainer>
            <Icon src={TTaBongIcon} />
          </S.TTaBongInnerContainer>
        </S.TTaBongOuterContainer>
      </S.TTaBongContainer>
      <S.IconContainer>
        <Icon src={iconList[2]} />
        <Icon src={iconList[3]} />
      </S.IconContainer>
    </S.BottomBarContainer>
  );
};

BottomBar.propTypes = {
  iconList: PropTypes.arrayOf(PropTypes.string),
  TTaBongIcon: PropTypes.string
};

export default BottomBar;
