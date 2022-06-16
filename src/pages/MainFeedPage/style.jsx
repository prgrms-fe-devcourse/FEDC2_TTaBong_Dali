import styled from '@emotion/styled';

export const MainFeedPageContainer = styled.div`
  height: 100%;
  width: 100%;
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
