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
      defaultValue: -1,
      control: 'number',
    },
    TTaBong: {
      defaultValue: -1,
      control: 'number',
    },
  },
};
export const Default = (args) => {
  return <UserInfoItem {...args} />;
};
