import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import Avatar from '../../../components/Avatar';
import AvatarBorder from '../../../components/AvatarBorder';

// 이모션 변수 사용
// 현재 문제는 윈도우에서 좌표값이 잡힘 배너는 위에만 박혀있어서 좌표값이 바뀌지 않음
const Banner = ({ isScrollDown = false }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let timer;
    if (isScrollDown && show) {
      clearTimeout(timer);

      timer = setTimeout(() => {
        setShow(false);
      }, 220);
    }
    if (!isScrollDown && !show) {
      clearTimeout(timer);
      setShow(true);
    }
    return () => {};
  });

  return (
    <div>
      {show && (
        <S.BannerContainer className={isScrollDown ? 'hide' : 'show'}>
          <AvatarBorder king="TTaBong">
            <Avatar size={40} />
          </AvatarBorder>
          <AvatarBorder king="coin">
            <Avatar size={40} />
          </AvatarBorder>
        </S.BannerContainer>
      )}
    </div>
  );
};

Banner.propTypes = {
  isScrollDown: PropTypes.bool,
  // TTaBongKing: PropTypes.array.isRequired,
  // CoinKing: PropTypes.array.isRequired,
};

export default React.memo(Banner);
