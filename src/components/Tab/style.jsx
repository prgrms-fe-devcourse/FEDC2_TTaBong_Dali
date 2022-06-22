import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { getPxToRem } from '../../utils/getPxToRem';

const skyBlueTabStyle = ({ theme }) => css`
  border: 0;
  outline: 0;
  background-color: ${theme.colors.skyblue[0]};
  color: ${theme.colors.white};
`;

const skyblueOutlinedTabStyle = ({ theme }) => css`
  border: 2px solid ${theme.colors.skyblue[0]};
  background-color: ${theme.colors.white};
  color: ${theme.colors.skyblue[0]};
`;

export const TabItemWrapper = styled.button`
  appearance: none;

  width: 10rem;
  height: 3rem;

  border-radius: ${getPxToRem(40)};

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
`;
