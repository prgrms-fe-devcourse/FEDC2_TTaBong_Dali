import styled from '@emotion/styled';

export const BannerContainer = styled.div`
  position: fixed;
  z-index: 0;
  left: 0%;
  right: 0%;
  top: 58px;
  height: 58px;
  display: flex;
  justify-content: space-around;
  background-color: ${(props) => props.theme.colors.skyblue[0]};
  border-radius: 0px 0px 30px 30px;

  &.hide {
    animation: down 0.5s ease;
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
    animation: up 0.5s ease;
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
