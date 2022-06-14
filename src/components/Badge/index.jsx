import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import theme from '../../commons/style/themes';

const Badge = ({
  children,
  count = 0,
  maxCount = 100,
  showZero = false,
  dot = false,
  backgroundColor = theme.colors.red,
  textColor = 'white',
}) => {
  const colorStyle = {
    backgroundColor,
    color: textColor,
  };

  let badge = null;
  if (count) {
    badge = (
      <S.Super style={colorStyle}>
        {maxCount && count > maxCount ? `${maxCount}+` : count}
      </S.Super>
    );
  } else if (dot) {
    badge = <S.Super className="dot" style={colorStyle} />;
  } else if (count !== undefined) {
    badge = showZero ? <S.Super style={colorStyle}>0</S.Super> : null;
  }

  return (
    <S.BadgeContainer>
      {children}
      {badge}
    </S.BadgeContainer>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  count: PropTypes.number,
  maxCount: PropTypes.number,
  showZero: PropTypes.bool,
  dot: PropTypes.bool,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Badge;
