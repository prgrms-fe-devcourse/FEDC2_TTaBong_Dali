import React from 'react';
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
      defaultValue: null,
      control: 'number',
    },
    TTaBong: {
      defaultValue: null,
      control: 'number',
    },
  },
};
export const Default = (args) => {
  return <UserInfoItem {...args} />;
};
