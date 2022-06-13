import React from 'react';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from './commons/style/GlobalStyle';
import theme from './commons/style/themes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>Test</div>
    </ThemeProvider>
  );
}

export default App;
