import styled from '@emotion/styled';

export const Header = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  height: 58px;

  display: flex;
  justify-content: space-between;

  background-color: ${(props) => props.theme.colors.skyblue[0]};
  border-radius: 0px 0px 30px 30px;
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

  margin-right: 8px;
  font-family: 'Noto Sans';
  font-weight: 800;
  font-size: 23px;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
`;
