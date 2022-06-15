import styled from '@emotion/styled';

export const CommentContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6px;
  margin-right: 6px;

  flex-shrink: 0;
`;

export const UserName = styled.span`
  font-size: 10px;
  font-weight: 700;

  margin-bottom: 2px;
`;

export const Time = styled.span`
  font-size: 8px;
  color: ${({ theme }) => theme.colors.darkgray[1]};
`;

export const Comment = styled.span`
  font-size: 10px;
  margin-left: 6px;
`;
