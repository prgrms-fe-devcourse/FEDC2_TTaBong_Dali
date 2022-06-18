import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainCard from '.';

export default {
  title: 'feature/cards/MainCard',
  component: MainCard,
  argTypes: {
    post: {
      type: { name: 'object' },
      defaultValue: {
        _id: '61782364812638741test',
        image: '',
        imgaePublicId: '',
        title:
          '{"type":"BigTTaBong","receiver":"62a83493cab1ef0259bc53f6","content":"오바마 아주아주아주감사해"}',
        channel: { _id: 'channelId' },
        author: { _id: 'userId', fullName: 'authorName', email: 'authorEmail' },
        likes: ['like1', 'like2'],
        comments: ['comment1', 'comment2', 'comment3'],
        createdAt: '',
        updatedAt: '',
      },
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
