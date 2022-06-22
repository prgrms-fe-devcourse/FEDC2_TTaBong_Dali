import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import UserProfilePage from './index';

export default {
  title: 'Pages/UserProfilePage',
  component: UserProfilePage,
  argTypes: {},
};

export const Default = (args) => {
  return (
    <Router>
      <UserProfilePage {...args} />;
    </Router>
  );
};
