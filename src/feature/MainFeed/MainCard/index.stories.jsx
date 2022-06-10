import React from 'react';
import MainCard from '.';

export default {
  title: 'Components/MainCard',
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
    commentsNum: {
      defaultValue: '',
      control: 'number',
    },
    likesNumb: {
      defaultValue: '',
      control: 'number',
    },
    likesReason: {
      defaultValue: '',
      control: 'text',
    },
  },
};
export const Default = (args) => {
  return <MainCard {...args} />;
};
