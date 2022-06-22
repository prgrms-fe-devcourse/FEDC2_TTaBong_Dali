import styled from '@emotion/styled';
import { getPxToRem } from '../../utils/getPxToRem';

export const RankPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 22rem;
  height: 100%;
  min-height: 20rem;

  position: relative;
  gap: 16px;
`;

export const TabContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
`;

export const BaseCardContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
`;

export const RankInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: cemter;
`;
export const RankList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  flex-grow: 1;

  margin: 16px 0;
  padding: 8px;
  gap: 8px;
  /* max-height: ${({ isAuth }) =>
    isAuth ? `${getPxToRem(260)}` : `${getPxToRem(320)}`}; */
`;

export const MyRankWrapper = styled.div`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
