import styled from '@emotion/styled';
import { css } from '@emotion/react';

// export const TabContainer = styled.div`
//   width: 100%;
//   height: 6rem;

//   display: flex;
// `;

export const TabWrapper = styled.div`
  width: 20rem;
  height: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Noto Sans';
  font-weight: 800;
  font-size: 16px;

  border: 2px solid;
  border-radius: 40px;

  background-color: ${(props) => props.theme.colors.white};

  border-color: ${(props) => props.theme.colors.skyblue[0]};
  color: ${(props) => props.theme.colors.skyblue[0]};
`;
