import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageTemplate from '.';

// 'mainFeed', 'ranking', 'search', 'user'
export default {
  title: 'Pages/PageTemplate',
  component: PageTemplate,
  argTypes: {
    page: {
      defaultValue: 'mainFeed',
      control: 'radio',
      options: ['mainFeed', 'ranking', 'search', 'user'],
    },
  },
};

export const Default = (args) => {
  return (
    <Router>
      <PageTemplate {...args} />
    </Router>
  );
};
