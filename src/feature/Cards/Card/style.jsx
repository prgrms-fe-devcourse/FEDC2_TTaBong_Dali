import styled from '@emotion/styled';

export const Card = styled.div`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 30px;
  padding-top: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;
