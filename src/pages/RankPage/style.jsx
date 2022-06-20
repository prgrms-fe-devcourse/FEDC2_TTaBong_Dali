import styled from '@emotion/styled';
import { getPxToRem } from '../../utils/getPxToRem';

export const RankPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  height: ${getPxToRem(600)};
  gap: 16px;
`;

export const TabContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const RankList = styled.ul`
  display: flex;
  flex-direction: column;
  overflow: auto;

  margin: 16px 0;
  padding: 8px 0;
  gap: 8px;
  max-height: ${({ isAuth }) =>
    isAuth ? `${getPxToRem(260)}` : `${getPxToRem(320)}`};
`;

export const MyRankWrapper = styled.div`
  position: absolute;
  bottom: 16px;
`;
