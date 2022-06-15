import { css } from '@emotion/react';
import styled from '@emotion/styled';

const skyBlueTabStyle = ({ theme }) => css`
  border: 0;
  outline: 0;
  background-color: ${theme.colors.skyblue[0]};
  color: white;
`;

const skyblueOutlinedTabStyle = ({ theme }) => css`
  border: 3px solid ${theme.colors.skyblue[0]};
  background-color: ${theme.colors.white};
  color: ${theme.colors.skyblue[0]};
`;

export const TabWrapper = styled.button`
  appearance: none;
  box-sizing: border-box;

  width: 20rem;
  height: 5rem;

  border-radius: 40px;

  text-align: center;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;

  cursor: pointer;

  ${({ clicked }) => (clicked ? skyBlueTabStyle : skyblueOutlinedTabStyle)};
`;
