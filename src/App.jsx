import React, { useEffect, useState } from 'react';
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
import ChannelProvider, {
  channelActionType,
  useChannelContext,
} from './contexts/ChannelProvider';
import { getSpecificChannel } from './apis';
import Constants from './commons/constants';
import { setCookie } from './utils/cookies';
import Spinner from './components/Spinner';

function App() {
  const { channel, dispatch } = useChannelContext();
  const { channelId } = channel;

  const handleGetChannel = async () => {
    const { _id: channelId, name: channelName } = await getSpecificChannel(
      Constants.CHANNEL_NAME,
    );

    await dispatch({
      type: channelActionType.getChannel,
      channelId,
      channelName,
    });

    setCookie(
      'channel',
      { channelName, channelId },
      {
        path: '/',
        maxAge: 60 * 60 * 9,
      },
    );
  };

  useEffect(() => {
    handleGetChannel();
  }, []);

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
        <Route path="/api/*" element={<TestApiComponent />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    )
  );
}

export default App;
