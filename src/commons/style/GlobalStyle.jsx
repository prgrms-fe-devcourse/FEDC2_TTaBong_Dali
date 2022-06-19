import { Global, css } from '@emotion/react';
import reset from 'emotion-reset';

function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${reset}

        *, *::after, *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
        }
        input {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
      `}
    />
  );
}

export default GlobalStyle;
