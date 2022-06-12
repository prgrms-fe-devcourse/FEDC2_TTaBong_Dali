import styled from '@emotion/styled';

export const BannerContainer = styled.div`
  position: fixed;
  left: 0%;
  right: 0%;
  top: 58px;
  height: 58px;
  display: flex;
  justify-content: space-around;
  background-color: ${(props) => props.theme.colors.skyblue[0]};
  border-radius: 0px 0px 30px 30px;
`;
