import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainFeed from '.';

export default {
  title: 'Pages/MainFeedPage',
  component: MainFeed,
  argTypes: {},
};

export const Default = (args) => {
  return (
    <Router>
      <MainFeed {...args} />;
    </Router>
  );
};
