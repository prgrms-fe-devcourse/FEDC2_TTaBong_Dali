import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RankPage from '.';

export default {
  title: 'pages/RankPage',
  component: RankPage,
  argTypes: {},
};
export const Default = (args) => {
  return (
    <Router>
      <RankPage {...args} />;
    </Router>
  );
};
