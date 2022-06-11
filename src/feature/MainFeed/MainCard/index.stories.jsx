import React from 'react';
import MainCard from '.';

export default {
  title: 'Feature/MainCard',
  component: MainCard,
  argTypes: {
    labelTypes: {
      defaultValue: ['moved', 'praise', 'warm'],
    },
    authorName: {
      defaultValue: '',
      control: 'text',
    },
    receiverName: {
      defaultValue: '',
      control: 'text',
    },
    commenCount: {
      defaultValue: '',
      control: 'number',
    },
    likeCount: {
      defaultValue: '',
      control: 'number',
    },
    likeReason: {
      defaultValue: '',
      control: 'text',
    },
  },
};
export const Default = (args) => {
  return <MainCard {...args} />;
};
