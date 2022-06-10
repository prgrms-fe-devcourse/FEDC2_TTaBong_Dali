import styled from '@emotion/styled';

export const BackgroundCard = styled.div`
  width: 358px;
  height: 204px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 30px;
  padding-top: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

export const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 29px;
`;

export const LabelContainer = styled.div`
  display: flex;
`;

export const DivisionLine = styled.hr`
  width: 300px;
  height: 2px;
  color: ${(props) => props.theme.colors.gray[0]};
`;

export const PraiseContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LikeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  overflow-x: auto;
`;

export const UpdateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CountSpan = styled.span`
  font-size: 8px;
`;
