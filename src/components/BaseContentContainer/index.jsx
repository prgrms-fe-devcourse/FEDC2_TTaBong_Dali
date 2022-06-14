import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

const BaseContentContainer = ({ children, opacity = 1 }) => {
  return (
    <S.Container opacity={opacity}>
      <S.ContentSection>
        <S.TestP>hello</S.TestP>
        <S.TestP>hello</S.TestP>
        <S.TestP>hello</S.TestP>
        <S.TestP>hello</S.TestP>
        {children}
      </S.ContentSection>
    </S.Container>
  );
};

BaseContentContainer.propTypes = {
  children: PropTypes.node,
  opacity: PropTypes.number,
};

export default BaseContentContainer;
