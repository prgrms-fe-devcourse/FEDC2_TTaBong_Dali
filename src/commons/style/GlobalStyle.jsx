import { Global, css } from '@emotion/react';
import reset from 'emotion-reset';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${reset}

        *, *::after, *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-family: Noto Sans KR, Nanum Gothic, sans-serif;
        }
        input {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
        input[type='text']:disabled {
          background-color: #fff;
        }
      `}
    />
  );
};

export default GlobalStyle;
