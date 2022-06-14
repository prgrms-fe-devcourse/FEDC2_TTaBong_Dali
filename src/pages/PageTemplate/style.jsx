import styled from '@emotion/styled';
import pageTemplateBackgroundImage from '../../../public/background.png';

export const PageTemplate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  padding: 0 16px;

  background-image: url(${pageTemplateBackgroundImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
`;

export const MainSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  margin-top: 74px;
  border: 1px solid black;
  line-height: 2rem;
  overflow: auto;

  div {
    flex-shrink: 0;
    width: 100%;
    height: 500px;
    background-color: white;
    margin: 1rem 0;
    border: 1px solid black;
  }
`;
