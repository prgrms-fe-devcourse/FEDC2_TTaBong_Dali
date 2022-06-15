import styled from '@emotion/styled';
import { getHexToRgb } from '../../utils/getHexToRgb';

export const Container = styled.div`
  width: 95%;
  min-height: 100%;
  height: 100%;
  padding: 2rem 1rem 2rem 1rem;
  background-color: ${(props) =>
    `rgba(${getHexToRgb(props.theme.colors.white)},${props.opacity})`};

  border-radius: 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

export const ContentSection = styled.div`
  height: 100%;
  overflow: auto;
`;
