import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BottomBar from '.';

export default {
  title: 'Feature/BottomBar',
  component: BottomBar,
  argTypes: {
    page: {
      control: { type: 'radio' },
      options: ['mainFeed', 'rank', 'search', 'user'],
      defaultValue: 'mainFeed',
    },
  },
};

export function Default(args) {
  return (
    <Router>
      <BottomBar {...args} />;
    </Router>
  );
}
