import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { getHexToRgb } from '../../utils/getHexToRgb';

export const Container = styled.div`
  width: ${({ width }) => (typeof width === 'number' ? `${width}rem` : width)};
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}rem` : height};

  padding: ${({ padding }) => padding.map((pad) => `${pad}rem`).join(' ')};
  background-color: ${({ backgroundColor, opacity }) =>
    `rgba(${getHexToRgb(backgroundColor)},${opacity})`};

  border-radius: 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

export const ContentSection = styled.div`
  height: 100%;
  overflow: auto;
`;
