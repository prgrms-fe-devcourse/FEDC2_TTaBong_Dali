import styled from '@emotion/styled';
import theme from '../../commons/style/themes';
import { getPxToRem } from '../../utils/getPxToRem';

export const PraisePageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BePraisedContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BePraisedLabelWrapper = styled.span`
  padding: 8px;
  font-weight: 500;
  font-size: 13px;
  color: ${theme.colors.darkgray[2]};
`;

export const BePraisedAvatarContainer = styled.div`
  display: flex;

  width: 100%;
  height: ${getPxToRem(64)};

  background-color: ${({ theme }) => theme.colors.yellow[1]};
  border-radius: 12px;
`;

export const BePraisedAvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 64px;
  height: 64px;
`;

export const TBEffect = styled.div`
  position: absolute;
  top: 50%;
  left: 45%;
  z-index: 10000;

  animation: TBEffect 0.4s ease;
  @keyframes TBEffect {
    0% {
      transform: scale(0.5);
    }

    100% {
      transform: scale(5) rotate(-15deg);
    }
  }
`;
