import styled from '@emotion/styled';
import { getHexToRgb } from '../../utils/getHexToRgb';
import { getPxToRem } from '../../utils/getPxToRem';

export const Container = styled.div`
  width: ${({ width }) =>
    typeof width === 'number' ? `${getPxToRem(width)}` : width};
  height: ${({ height }) =>
    typeof height === 'number' ? `${getPxToRem(height)}` : height};

  padding: ${({ padding }) => padding.map((pad) => `${pad}rem`).join(' ')};
  background-color: ${({ backgroundColor, opacity }) =>
    `rgba(${getHexToRgb(backgroundColor)},${opacity})`};

  border-radius: ${({ borderRadius }) => borderRadius};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

  overflow: ${({ overflow }) => (overflow ? 'auto' : '')};
`;

export const ContentSection = styled.div`
  height: 100%;
`;
