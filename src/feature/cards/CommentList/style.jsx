import styled from '@emotion/styled';

export const CommentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ height }) => `${height}px`};
  overflow: scroll;
`;

export const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 10px;
`;

export const CountSpan = styled.span`
  font-size: 10px;
`;
