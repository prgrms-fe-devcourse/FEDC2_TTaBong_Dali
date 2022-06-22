import styled from '@emotion/styled';
import { getPxToRem } from '../../utils/getPxToRem';

export const DivisionLine = styled.hr`
  width: ${({ size }) => getPxToRem(size)};
  height: 2px;
  background-color: ${({ color }) => color};
  border: none;
`;
