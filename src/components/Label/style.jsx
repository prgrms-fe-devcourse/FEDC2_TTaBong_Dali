import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { getPxToRem } from '../../utils/getPxToRem';

const warmLabelStyle = ({ theme }) => css`
  background: linear-gradient(
    to bottom right,
    ${theme.colors.warm[0]},
    ${theme.colors.warm[1]}
  );
`;

const movedLabelStyle = ({ theme }) => css`
  background: linear-gradient(
    to bottom right,
    ${theme.colors.moved[0]},
    ${theme.colors.moved[1]}
  );
`;

const praiseLabelStyle = ({ theme }) => css`
  background: linear-gradient(
    to bottom right,
    ${theme.colors.praise[0]},
    ${theme.colors.praise[1]}
  );
`;

const defaultLabelStyle = ({ theme }) => css`
  color: ${theme.colors.gray[0]};
  background: ${theme.colors.white};
`;

export const StyledLabel = styled.div`
  width: ${getPxToRem(40)};
  height: ${getPxToRem(20)};
  border-radius: 12px;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  ${({ type }) => {
    switch (type) {
      case 'warm':
        return warmLabelStyle;
      case 'moved':
        return movedLabelStyle;
      case 'praise':
        return praiseLabelStyle;
      default:
        return defaultLabelStyle;
    }
  }};
`;
