import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchPage from '.';

export default {
  title: 'pages/SearchPage',
  component: SearchPage,
  argTypes: {},
};
export const Default = (args) => {
  return (
    <Router>
      <SearchPage {...args} />;
    </Router>
  );
};
