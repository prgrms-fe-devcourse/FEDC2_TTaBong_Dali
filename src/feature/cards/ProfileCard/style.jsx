import styled from '@emotion/styled';

export const ProfileCardWrapper = styled.div`
  width: 95%;
`;

export const ContentWrapper = styled.div`
  display: flex;
`;

export const ContentRightWrapper = styled.article`
  flex-grow: 1;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
`;

export const Title = styled.h1`
  font-weight: 700;
`;

export const Content = styled.div`
  width: 12rem;
  padding-top: 0.2rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.colors.gray[0]};
`;

export const LabelContainer = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
`;
