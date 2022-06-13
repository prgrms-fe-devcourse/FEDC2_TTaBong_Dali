import React from 'react';
import BottomBar from '.';

export default {
  title: 'Feature/BottomBar',
  component: BottomBar,
  argTypes: {
    page: {
      control: { type: 'radio' },
      options: ['mainFeed', 'ranking', 'search', 'user'],
      defaultValue: 'mainFeed',
    },
  },
};

export function Default(args) {
  return <BottomBar {...args} />;
}
