import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import Button from '../Button';

export const TabItem = ({ children, clicked = true }) => {
  return <S.TabWrapper clicked={clicked}>{children}</S.TabWrapper>;
};

TabItem.propTypes = {
  clicked: PropTypes.bool,
};

const Tab = ({ children }) => {
  return <div>hello</div>;
};

Tab.propTypes = {};

export default Tab;
