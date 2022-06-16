import React from 'react';
import Comment from '.';

export default {
  title: 'feature/cards/Comment',
  component: Comment,
  argTypes: {
    author: {
      defaultValue: {
        fullname: '이우재',
        img: null,
      },
      control: 'object',
    },
    comment: { defaultValue: '이것은 댓글입니다', control: 'text' },
    createdTime: {
      defaultValue: '2021-10-15T20:48:19.816Z',
      control: 'text',
    },
  },
};

export function Default(args) {
  return <Comment {...args} />;
}
