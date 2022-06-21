import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFoundPage from './index';

export default {
  title: 'Pages/NotFoundPage',
  component: NotFoundPage,
  argTypes: {},
};

export const Default = (args) => {
  return (
    <Router>
      <NotFoundPage {...args} />
    </Router>
  );
};
