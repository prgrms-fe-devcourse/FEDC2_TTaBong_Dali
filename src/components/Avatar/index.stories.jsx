import React from 'react';
import Avatar from '.';
import defaultAvatar from '../../assets/avatar_default.svg';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    src: { defaultValue: defaultAvatar },
    size: {
      defaultValue: 60,
      control: { type: 'range', min: 40, max: 200 },
    },
    avatarName: {
      defaultValue: '',
      control: 'text',
    },
  },
};

export const Default = (args) => {
  return <Avatar {...args} />;
};
