import React from 'react';
import AvatarBorder from '.';

export default {
  title: 'Components/AvatarBorder',
  component: AvatarBorder,
  argTypes: {
    size: {
      defaultValue: 'TTaBong',
      control: { type: 'radio' },
      option: ['TTaBong', 'coin'],
    },
  },
};
export const Default = (args) => {
  return <AvatarBorder {...args} />;
};
