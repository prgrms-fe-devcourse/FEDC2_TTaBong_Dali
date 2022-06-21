import styled from '@emotion/styled';
import { getPxToRem } from '../../../utils/getPxToRem';

export const StyledTextarea = styled.textarea`
  width: 100%;
  height: ${getPxToRem(150)};

  padding: 8px;
  border: 2px solid ${({ theme }) => theme.colors.yellow[0]};
  border-radius: 8px;
  resize: none;
`;
