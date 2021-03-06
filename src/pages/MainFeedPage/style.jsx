import styled from '@emotion/styled';
import { getPxToRem } from '../../utils/getPxToRem';

export const MainFeedPageContainer = styled.div`
  height: 100%;
  width: 110%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  .mainCard {
    margin: 1rem 0;
    text-decoration: none;
    color: inherit;
  }
  &.bannerShown {
    margin-top: 3rem;
  }
`;

export const MainCardWrapper = styled.div`
  margin-bottom: ${getPxToRem(18)};
`;

export const Announce = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-weight: 400;
`;
