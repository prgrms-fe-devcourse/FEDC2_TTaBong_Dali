import styled from '@emotion/styled';
import { number } from 'prop-types';

export const Card = styled.div`
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 30px;
  padding-top: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;
