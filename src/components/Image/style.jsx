import styled from '@emotion/styled';

export const Image = styled.img`
  width: ${({ width }) => width};
  height: ${({ width }) => width};
  object-fit: ${({ mode }) => mode}; // cover, fill, contain
  border-radius: '10px';
`;
