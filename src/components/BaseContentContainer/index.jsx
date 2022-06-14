import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import Constants from '../../commons/constants';

const BaseContentContainer = ({
  children,
  opacityType = Constants.Opacity.OpacityVisible,
}) => {
  return (
    <S.Container opacity={opacityType}>
      <S.ContentSection>{children}</S.ContentSection>
    </S.Container>
  );
};

BaseContentContainer.propTypes = {
  children: PropTypes.node,
  opacityType: PropTypes.oneOf([
    Constants.Opacity.OpacityVisible,
    Constants.Opacity.OpacityTransparent,
  ]),
};

export default BaseContentContainer;
