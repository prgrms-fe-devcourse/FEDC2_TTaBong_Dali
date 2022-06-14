import styled from '@emotion/styled';

export const Container = styled.div`
  width: 95%;
  min-height: 100%;
  background-color: rgba(255, 255, 255, ${(props) => props.opacity});
  border-radius: 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

export const ContentSection = styled.div`
  height: 100%;
  padding: 2rem 2rem 1rem 1rem;
`;

export const TestP = styled.p`
  border: 1px solid red;
`;
