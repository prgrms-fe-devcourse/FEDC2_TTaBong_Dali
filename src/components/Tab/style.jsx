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

export const TabItemWrapper = styled.button`
  appearance: none;
  box-sizing: border-box;

  width: 10rem;
  height: 3rem;

  border-radius: 40px;

  text-align: center;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;

  cursor: pointer;

  ${({ active }) => (active ? skyBlueTabStyle : skyblueOutlinedTabStyle)};
`;

export const TabItemContainer = styled.div`
  box-sizing: border-box;

  width: 100%;

  display: flex;
  justify-content: space-evenly;

  // temp
`;
