import styled from '@emotion/styled';
import theme from '../../commons/style/themes';

export const CardWrapperForSlide = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;

  animation: slide 0.4s ease-out;

  @keyframes slide {
    0% {
      transform: translateX(110%);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;

export const AlarmPageContainer = styled.div`
  margin: 0 1.5rem;
`;

export const PrevButton = styled.button`
  border: none;
  outline: none;
  background-color: inherit;
  color: ${({ theme }) => theme.colors.gray[0]};

  font-size: 1rem;
  margin-bottom: 1rem;
  margin-left: -0.3rem;
`;
