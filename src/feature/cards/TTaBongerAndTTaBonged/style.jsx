import styled from '@emotion/styled';

export const TTaBongsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
`;

export const TTaBongIconWrapper = styled.div`
  margin-right: -20px;
  z-index: 1;
  transform: rotate(-15deg);

  animation: TB 1s ease;
  @keyframes TB {
    0% {
      transform: translateX(-6rem);
    }
    30% {
      transform: translateX(0);
    }

    80% {
      transform: scale(1.6) rotate(20deg);
    }
    100% {
      transform: scale(1) rotate(-15deg);
    }
  }

  &.Big {
    animation: bigTB 1s ease;
    transform: scale(1.6) rotate(-15deg);

    @keyframes bigTB {
      0% {
        transform: translateX(-6rem);
      }
      30% {
        transform: translateX(0);
      }

      80% {
        transform: scale(1.6) rotate(20deg);
      }
      100% {
        transform: scale(1.6) rotate(-15deg);
      }
    }
  }
`;

export const TTaBongedContainer = styled.div`
  display: flex;
  align-items: center;
`;
