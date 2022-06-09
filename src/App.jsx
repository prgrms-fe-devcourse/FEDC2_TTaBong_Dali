import React from 'react';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from './commons/style/GlobalStyle';
import theme from './commons/style/themes';
import Button from './components/Button';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>Test</div>
      <Button>Palette</Button>
    </ThemeProvider>
  );
}

export default App;
