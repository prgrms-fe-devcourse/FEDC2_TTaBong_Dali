import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import Constants from '../../commons/constants';
import theme from '../../commons/style/themes';

const BaseCardContainer = ({
  children,
  width = '100%',
  height = '100%',
  padding = [2, 1, 2, 1],
  opacityType = Constants.OpacityVisible,
  backgroundColor = `${theme.colors.white}`,
}) => {
  return (
    <S.Container
      opacity={opacityType}
      width={width}
      height={height}
      padding={padding}
      backgroundColor={backgroundColor}
    >
      <S.ContentSection>{children}</S.ContentSection>
    </S.Container>
  );
};

BaseCardContainer.propTypes = {
  children: PropTypes.node,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  padding: PropTypes.array,
  backgroundColor: PropTypes.string,
  opacityType: PropTypes.oneOf([
    Constants.OpacityVisible,
    Constants.OpacityTransparent,
  ]),
};

export default BaseCardContainer;
