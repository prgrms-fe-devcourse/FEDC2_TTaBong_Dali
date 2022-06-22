import styled from '@emotion/styled';
import Logo from '../../../components/Logo';

export const Header = styled.div`
  z-index: 3000;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 3.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border-radius 0.3s;
  background-color: ${({ theme }) => theme.colors.skyblue[0]};
  border-radius: 0 0 2rem 2rem;
`;

export const AvatarContainer = styled.div`
  position: fixed;
  left: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const TTaBongKingAvatarWrapper = styled.div`
  border: 0.2rem solid transparent;
  border-radius: 50%;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(
      to bottom right,
      ${(props) => props.theme.colors.warm[0]},
      ${(props) => props.theme.colors.warm[1]}
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export const CoinKingAvatarWrapper = styled.div`
  border: 0.2rem solid transparent;
  border-radius: 50%;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(
      to bottom right,
      ${(props) => props.theme.colors.praise[1]},
      ${(props) => props.theme.colors.praise[0]}
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export const PlacedLogo = styled(Logo)`
  cursor: pointer;
  margin-top: 0.2rem;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0.6rem;
  right: 1.5rem;
`;
