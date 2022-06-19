import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  display: ${({ isModalOn }) => (isModalOn ? 'block' : 'none')};
`;

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
