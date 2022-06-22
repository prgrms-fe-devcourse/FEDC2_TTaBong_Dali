import styled from '@emotion/styled';
import { getPxToRem } from '../../../utils/getPxToRem';

export const Card = styled.div`
  width: ${({ width }) =>
    typeof width === 'number' ? `${getPxToRem(width)}` : width};
  height: ${({ height }) =>
    typeof height === 'number' ? `${getPxToRem(height)}` : height};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 30px;
  padding-top: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  animation: cardUp 0.1s ease;
  @keyframes cardUp {
    0% {
      transform: scale(0.5);
    }

    100% {
      transform: scale(1);
    }
  }
`;
