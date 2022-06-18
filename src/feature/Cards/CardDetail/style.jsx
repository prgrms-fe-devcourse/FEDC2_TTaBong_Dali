import styled from '@emotion/styled';

export const MainSection = styled.div`
  margin: 0 16px;
`;

export const ContentContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

export const PraiseContainer = styled.div`
  display: flex;
  height: 156px;

  flex-direction: column;
`;

export const PraiseReasonWrapper = styled.h3`
  font-weight: 700;
`;

export const PraiseContentWrapper = styled.div`
  padding-top: 8px;
  padding-right: 24px;
  height: 144px;
  overflow-y: scroll;

  text-overflow: ellipsis;

  color: ${(props) => props.theme.colors.darkgray[1]};
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const LikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 16px;
`;

export const LikeEventWrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 28px;
`;

export const CountSpan = styled.span`
  margin-top: 8px;
  font-size: 8px;
`;

export const CommentInputWrapper = styled.div`
  position: fixed;
  bottom: 0;
`;
