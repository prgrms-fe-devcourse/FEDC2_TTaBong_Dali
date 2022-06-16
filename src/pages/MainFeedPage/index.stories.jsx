import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainFeedPage from './index';

export default {
  title: 'Pages/MainFeedPage',
  component: MainFeedPage,
  argTypes: {},
};

export const Default = (args) => {
  return (
    <Router>
      <MainFeedPage {...args} />;
    </Router>
  );
};
