import styled from '@emotion/styled';

const toRem = (px) => {
  return `${(px / 16).toFixed(2)}rem`;
};

export const DivisionLine = styled.hr`
  width: ${({ size }) => toRem(size)};
  height: 2px;
  background-color: ${({ color }) => color};
  border: none;
`;
