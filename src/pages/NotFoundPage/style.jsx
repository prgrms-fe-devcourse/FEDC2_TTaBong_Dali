import styled from '@emotion/styled';
import { getPxToRem } from '../../utils/getPxToRem';

export const NotFoundPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const NotFoundMessage = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
  font-size: 24px;
  width: ${getPxToRem(250)};
  margin-left: ${getPxToRem(32)};
`;

export const Nav = styled.nav`
  margin-top: 16px;
  cursor: pointer;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.darkgray[2]};
`;
