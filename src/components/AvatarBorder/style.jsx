import { css } from '@emotion/react';
import styled from '@emotion/styled';

const TTaBongKingAvatarWrapper = ({ theme }) => css`
  border: 0.2rem solid transparent;
  border-radius: 50%;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(
      to bottom right,
      ${theme.colors.warm[0]},
      ${theme.colors.warm[1]}
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

const CoinKingAvatarWrapper = ({ theme }) => css`
  border: 0.2rem solid transparent;
  border-radius: 50%;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(
      to bottom right,
      ${theme.colors.praise[1]},
      ${theme.colors.praise[0]}
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export const KingWrapper = styled.div`
  ${({ king }) => {
    switch (king) {
      case 'TTaBong':
        return TTaBongKingAvatarWrapper;
      case 'coin':
        return CoinKingAvatarWrapper;
      default:
        return null;
    }
  }}
`;
