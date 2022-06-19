import styled from '@emotion/styled';
import theme from '../../commons/style/themes';
import { getHexToRgb } from '../../utils/getHexToRgb';

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;

  display: ${({ isModalOn }) => (isModalOn ? 'block' : 'none')};
`;

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ backgroundColor, backgroundOpacity }) =>
    `rgba(${getHexToRgb(theme.colors[backgroundColor || 'black'])}, ${
      backgroundOpacity === 0 ? 0 : backgroundOpacity || 1
    })`};
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
