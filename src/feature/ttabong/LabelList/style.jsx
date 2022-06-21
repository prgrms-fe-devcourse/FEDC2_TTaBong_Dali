import styled from '@emotion/styled';

export const StyledLabelList = styled.dl`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;

export const LabelTitle = styled.dt`
  font-size: 8px;
  color: ${({ theme }) => theme.colors.darkgray[2]};
`;

export const LabelContent = styled.dd`
  display: flex;

  gap: 8px;
  cursor: pointer;
`;
