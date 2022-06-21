import styled from '@emotion/styled';

export const MainCardContainer = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const SecondSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 29px;
`;

export const DivisionLine = styled.hr`
  width: 300px;
  height: 2px;
  background-color: ${(props) => props.theme.colors.gray[0]};
  border: none;
`;

export const PraiseContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const PraiseReason = styled.h3`
  font-weight: 700;
`;

export const PraiseContent = styled.div`
  padding-top: 8px;
  padding-right: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  color: ${(props) => props.theme.colors.darkgray[1]};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 50%;
`;

export const LikeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  overflow-x: auto;
  width: 100%;
`;

export const CountNumContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 32px;
`;

export const CountSpan = styled.span`
  font-size: 8px;
`;

export const StyledIcon = styled.img`
  width: 36px;
  height: 36px;
`;
