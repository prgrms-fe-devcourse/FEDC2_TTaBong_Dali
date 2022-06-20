import styled from '@emotion/styled';

export const ContentWrapper = styled.div`
  display: flex;
`;

export const ContentRightWrapper = styled.article`
  flex-grow: 1;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const Title = styled.h1`
  font-weight: 700;
`;

export const Content = styled.div`
  width: 10rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.colors.gray[0]};
`;

export const LabelContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
