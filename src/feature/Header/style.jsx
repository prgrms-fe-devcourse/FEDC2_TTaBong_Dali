import styled from '@emotion/styled';

export const Header = styled.div`
  position: fixed;
  left: 0%;
  right: 0%;
  top: 0%;
  height: 58px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  transition: border-radius 0.3s;
  background-color: ${({ theme }) => theme.colors.skyblue[0]};
  border-radius: ${({ scrollDown }) =>
    scrollDown ? '0px 0px 30px 30px' : '0px'};
`;

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
  gap: 16px;
`;

export const TTaBongKingAvatarWrapper = styled.div`
  border: 3px solid transparent;
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
  border: 3px solid transparent;
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

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Noto Sans';
  font-weight: 800;
  font-size: 23px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
  justify-content: center;
`;
