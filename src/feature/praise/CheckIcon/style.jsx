import styled from '@emotion/styled';
import theme from '../../../commons/style/themes';
import { getPxToRem } from '../../../utils/getPxToRem';

export const CheckIconWrapper = styled.div``;

export const UncheckedBox = styled.div`
  width: ${getPxToRem(24)};
  height: ${getPxToRem(24)};

  border: 1px solid ${theme.colors.gray[0]};
  border-radius: 50%;
`;

export const CheckedBox = styled.div`
  width: ${getPxToRem(24)};
  height: ${getPxToRem(24)};

  border: 2px solid ${theme.colors.yellowHover};
  border-radius: 50%;

  background-color: ${theme.colors.yellow};

  display: flex;
  justify-content: center;
  align-items: center;
`;
