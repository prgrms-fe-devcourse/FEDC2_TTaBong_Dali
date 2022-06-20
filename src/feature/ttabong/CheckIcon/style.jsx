import styled from '@emotion/styled';
import theme from '../../../commons/style/themes';

export const CheckIconWrapper = styled.div``;

export const UncheckedBox = styled.div`
  width: 24px;
  height: 24px;

  border: 1px solid ${theme.colors.gray[0]};
  border-radius: 50%;
`;

export const CheckedBox = styled.div`
  width: 24px;
  height: 24px;

  border: 2px solid ${theme.colors.yellowHover};
  border-radius: 50%;

  background-color: ${theme.colors.yellow};

  display: flex;
  justify-content: center;
  align-items: center;
`;
