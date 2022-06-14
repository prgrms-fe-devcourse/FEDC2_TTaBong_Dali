import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

const Tab = ({ children, isClicked = true }) => {
  return <S.TabWrapper clicked={isClicked}>{children}</S.TabWrapper>;
};

Tab.propTypes = {};

export default Tab;
