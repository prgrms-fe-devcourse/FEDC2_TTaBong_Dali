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
          font-family: -apple-system, BlinkMacSystemFont, Bazier Square,
            Noto Sans KR, Segoe UI, Apple SD Gothic Neo, Roboto, Helvetica Neue,
            Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
            Segoe UI Symbol, Noto Color Emoji;
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
