import styled from '@emotion/styled';

export const BannerContainer = styled.div`
  position: absolute;
  z-index: 2000;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 23rem;
  min-height: 7rem;
  padding-top: 3.6rem;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.colors.skyblue[0]};
  border-radius: 0 0 2rem 2rem;

  &.hide {
    animation: down 0.4s ease-out;
    @keyframes down {
      0% {
        transform: translateY(0px);
      }
      100% {
        transform: translateY(-100px);
      }
    }
  }

  &.show {
    animation: up 0.4s ease-out;
    @keyframes up {
      0% {
        transform: translateY(-100px);
      }
      100% {
        transform: translateY(0px);
      }
    }
  }
`;
