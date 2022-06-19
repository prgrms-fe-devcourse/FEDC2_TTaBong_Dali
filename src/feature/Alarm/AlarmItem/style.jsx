import styled from '@emotion/styled';
import theme from '../../../commons/style/themes';

export const AlarmItem = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AlarmContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 1.5rem;
`;

export const AlarmTitle = styled.span`
  font-size: 0.75rem;
`;

export const BoldAuthor = styled.strong`
  font-weight: 700;
`;

export const AlarmComment = styled.span`
  color: ${({ theme }) => theme.colors.gray[0]};
  font-size: 0.75rem;
`;
