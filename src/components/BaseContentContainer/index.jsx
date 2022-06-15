import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import Constants from '../../commons/constants';

const BaseContentContainer = ({
  children,
  height = '100%',
  opacityType = Constants.OpacityVisible,
}) => {
  return (
    <S.Container opacity={opacityType} height={height}>
      <S.ContentSection>{children}</S.ContentSection>
    </S.Container>
  );
};

BaseContentContainer.propTypes = {
  children: PropTypes.node,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  opacityType: PropTypes.oneOf([
    Constants.OpacityVisible,
    Constants.OpacityTransparent,
  ]),
};

export default BaseContentContainer;
