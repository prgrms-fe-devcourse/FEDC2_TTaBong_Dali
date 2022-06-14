import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

const Card = ({ children, width = 358, height = 204 }) => {
  return (
    <S.Card width={width} height={height}>
      {children}
    </S.Card>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Card;
