import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import theme from '../../commons/style/themes';

const BaseCardContainer = ({
  children,
  width = '100%',
  height = '100%',
  padding = [2, 1, 0, 1],
  opacityType = theme.opacity.visible,
  backgroundColor = `${theme.colors.white}`,
  borderRadius = `${theme.borderRadius.rounded}`,
  overflow,
}) => {
  return (
    <S.Container
      opacity={opacityType}
      width={width}
      height={height}
      padding={padding}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      overflow={overflow}
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
  opacityType: PropTypes.oneOf([...Object.values(theme.opacity)]),
  borderRadius: PropTypes.string,
};

export default BaseCardContainer;
