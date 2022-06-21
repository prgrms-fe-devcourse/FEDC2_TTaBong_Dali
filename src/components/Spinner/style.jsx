import styled from '@emotion/styled';

export const Spinner = styled.div`
  animation: spin 1s infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
