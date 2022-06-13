import styled from '@emotion/styled';
import backgroundImage from '../../../public/background.png';

export const PageTemplate = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 16px;
`;
