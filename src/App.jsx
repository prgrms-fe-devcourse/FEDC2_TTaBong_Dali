import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Route, Routes, Navigate } from 'react-router-dom';
import GlobalStyle from './commons/style/GlobalStyle';
import theme from './commons/style/themes';
import NotFoundPage from './pages/NotFound';
import BottomBar from './feature/BottomBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/main" element={<BottomBar page="mainfeed" />} />
        <Route path="/cardDetail" element={<NotFoundPage />} />
        <Route path="/ranking" element={<NotFoundPage />} />
        <Route path="/TTaBong" element={<NotFoundPage />} />
        <Route path="/search" element={<NotFoundPage />} />
        <Route path="/userProfile" element={<NotFoundPage />} />
        <Route path="/*" element={<BottomBar />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
