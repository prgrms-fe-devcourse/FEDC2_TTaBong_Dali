import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import Avatar from '../../components/Avatar';

const Banner = ({ TTaBongKing, CoinKing }) => {
  return (
    <S.BannerContainer>
      <Avatar size={45} />
      <Avatar size={45} />
    </S.BannerContainer>
  );
};

Banner.propTypes = {};

export default Banner;
