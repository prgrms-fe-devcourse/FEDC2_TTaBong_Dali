import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CardDetailPage from '.';

// 'mainFeed', 'ranking', 'search', 'user'
export default {
  title: 'Pages/CardDetailPage',
  component: CardDetailPage,
  argTypes: {},
};

export const Default = (args) => {
  return (
    <Router>
      <CardDetailPage {...args} />
    </Router>
  );
};
