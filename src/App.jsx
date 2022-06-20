import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Route, Routes, Navigate } from 'react-router-dom';
import GlobalStyle from './commons/style/GlobalStyle';
import theme from './commons/style/themes';
import {
  CardDetailPage,
  MainFeedPage,
  RankPage,
  SearchPage,
  TTaBongPage,
  UserProfilePage,
  LoginPage,
  RegisterPage,
} from './pages';
import NotFoundPage from './pages/NotFound';
import UserProvider from './contexts/UserProvider';
import { AuthRoute, ProtectedRoute } from './routes';
import TestApiComponent from './feature/TestApiComponent';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserProvider>
        <Routes>
          <Route path="/mainFeed/*" element={<MainFeedPage />} />
          <Route path="/cardDetail/*" element={<CardDetailPage />} />
          <Route path="/rank/*" element={<RankPage />} />
          <Route
            path="/TTaBong/*"
            element={<ProtectedRoute Component={TTaBongPage} />}
          />
          <Route path="/search/*" element={<SearchPage />} />
          <Route path="/userProfile/*" element={<UserProfilePage />} />
          <Route path="/profileEdit/*" element={<ProfileEditPage />} />
          <Route path="/login" element={<AuthRoute Component={LoginPage} />} />
          <Route
            path="/register"
            element={<AuthRoute Component={RegisterPage} />}
          />
          <Route path="/error/*" element={<NotFoundPage />} />
          <Route path="/api/*" element={<TestApiComponent />} />
          <Route path="/*" element={<Navigate to="/mainFeed" />} />
        </Routes>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
