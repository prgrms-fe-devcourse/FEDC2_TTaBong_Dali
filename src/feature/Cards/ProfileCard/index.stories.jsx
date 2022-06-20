import React from 'react';
import ProfileCard from '.';

export default {
  title: 'Feature/Cards/ProfileCard',
  component: ProfileCard,
  argTypes: {
    authorName: {
      defaultValue: 'namename',
      control: 'text',
    },
  },
};

export function Default(args) {
  return <ProfileCard {...args} />;
}
