import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import UserInfoItem from '.';

export default {
  title: 'Components/UserInfoItem',
  component: UserInfoItem,
  argTypes: {
    rank: {
      defaultValue: '',
      control: 'number',
    },
    userName: {
      defaultValue: '',
      control: 'text',
    },
    coin: {
      defaultValue: -1,
      control: 'number',
    },
    TTaBong: {
      defaultValue: -1,
      control: 'number',
    },
    useCheck: {
      defaultValue: false,
      control: 'boolean',
    },
  },
};
export const Default = (args) => {
  return (
    <Router>
      <UserInfoItem {...args} />
    </Router>
  );
};
