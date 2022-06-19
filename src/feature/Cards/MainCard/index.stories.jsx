import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainCard from '.';

export default {
  title: 'feature/cards/MainCard',
  component: MainCard,
  argTypes: {
    labelItems: {
      defaultValue: ['moved', 'praise', 'warm'],
    },
    authorName: {
      defaultValue: '이우제',
      control: 'text',
    },
    receiverName: {
      defaultValue: '민상기',
      control: 'text',
    },
    commentCount: {
      defaultValue: '3',
      control: 'number',
    },
    likeCount: {
      defaultValue: '5',
      control: 'number',
    },
    likeReason: {
      defaultValue: '열심히 해서',
      control: 'text',
    },
  },
};
export const Default = (args) => {
  return (
    <Router>
      <MainCard {...args} />
    </Router>
  );
};
