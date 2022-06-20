import { css } from '@emotion/react';
import styled from '@emotion/styled';

const yellowButtonStyle = ({ theme }) => css`
  border: 0;
  outline: 0;
  background-color: ${theme.colors.yellow[0]};
  color: white;
  &:hover {
    background-color: ${theme.colors.yellowHover};
  }
`;

const skyblueButtonStyle = ({ theme }) => css`
  border: 0;
  outline: 0;
  background-color: ${theme.colors.skyblue[0]};
  color: white;
  &:hover {
    background-color: ${theme.colors.skyblueHover};
  }
`;

const yellowOutlinedButtonStyle = ({ theme }) => css`
  border: 2px solid ${theme.colors.yellow[0]};
  background-color: ${theme.colors.white};
  color: ${theme.colors.gray[0]};
`;

const skyblueOutlinedButtonStyle = ({ theme }) => css`
  border: 3px solid ${theme.colors.skyblue[1]};
  background-color: ${theme.colors.white};
  color: ${theme.colors.gray[0]};
`;

export const StyledButton = styled.button`
  cursor: pointer;
  appearance: none;
  text-align: center;
  text-decoration: none;
  border-radius: 25px;
  margin: 0;
  box-sizing: border-box;
  font-size: 20px;
  padding: 5px;
  width: ${({ width }) => width || '305px'};
  height: 59px;
  ${({ version }) => {
    switch (version) {
      case 'yellow':
        return yellowButtonStyle;
      case 'yellowOutlined':
        return yellowOutlinedButtonStyle;
      case 'skyblueOutlined':
        return skyblueOutlinedButtonStyle;
      default:
        return skyblueButtonStyle;
    }
  }};
`;
