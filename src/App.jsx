import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
import { AuthRoute, ProtectedRoute } from './routes';
import { useChannelContext } from './contexts/ChannelProvider';

function App() {
  const { channel } = useChannelContext();
  const { channelId } = channel;

  return (
    channelId && (
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
        <Route path="/login" element={<AuthRoute Component={LoginPage} />} />
        <Route
          path="/register"
          element={<AuthRoute Component={RegisterPage} />}
        />
        <Route path="/error/*" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    )
  );
}

export default App;
