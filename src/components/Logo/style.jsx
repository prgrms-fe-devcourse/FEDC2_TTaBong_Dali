import styled from '@emotion/styled';

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Noto Sans';
  font-weight: 800;
  font-size: 23px;
  //color: ${(props) => props.theme.colors.white};
  color: ${({ type, theme }) =>
    type === 'white' ? theme.colors.white : theme.colors.skyblue[0]};
`;
