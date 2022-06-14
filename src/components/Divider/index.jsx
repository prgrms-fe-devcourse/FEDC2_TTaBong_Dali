import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import theme from '../../commons/style/themes';

const Divider = ({ size = 300, color = theme.colors.gray[0] }) => {
  return <S.DivisionLine size={size} color={color} />;
};

Divider.propTypes = {};

export default Divider;
