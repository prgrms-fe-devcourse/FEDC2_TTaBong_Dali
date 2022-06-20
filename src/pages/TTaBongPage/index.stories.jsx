import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TTaBongPage from '.';

export default {
  title: 'pages/TTaBongPage',
  component: TTaBongPage,
  argTypes: {},
};
export const Default = (args) => {
  return (
    <Router>
      <TTaBongPage {...args} />;
    </Router>
  );
};
