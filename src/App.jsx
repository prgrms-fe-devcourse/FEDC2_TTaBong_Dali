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
  ProfileEditPage,
  LoginPage,
  RegisterPage,
  NotFoundPage,
  AlarmPage,
} from './pages';
import UserProvider from './contexts/UserProvider';
import { AuthRoute, ProtectedRoute } from './routes';
import TestApiComponent from './feature/TestApiComponent';
import ChannelProvider from './contexts/ChannelProvider';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ChannelProvider>
        <UserProvider>
          <Routes>
            <Route path="/" element={<MainFeedPage />} />
            <Route path="/cardDetail/:id" element={<CardDetailPage />} />
            <Route path="/rank/*" element={<RankPage />} />
            <Route
              path="/TTaBong/*"
              element={<ProtectedRoute Component={TTaBongPage} />}
            />
            <Route
              path="/profileEdit/*"
              element={<ProtectedRoute Component={ProfileEditPage} />}
            />
            <Route
              path="/alarm/*"
              element={<ProtectedRoute Component={AlarmPage} />}
            />
            <Route path="/search/*" element={<SearchPage />} />
            <Route path="/userProfile/:id" element={<UserProfilePage />} />
            <Route
              path="/login"
              element={<AuthRoute Component={LoginPage} />}
            />
            <Route
              path="/register"
              element={<AuthRoute Component={RegisterPage} />}
            />
            <Route path="/error/*" element={<NotFoundPage />} />
            <Route path="/api/*" element={<TestApiComponent />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </UserProvider>
      </ChannelProvider>
    </ThemeProvider>
  );
}

export default App;
