import React from 'react';
import CommentList from '.';

export default {
  title: 'Feature/Cards/CommentList',
  component: CommentList,
  argTypes: {
    comments: {
      defaultValue: [
        {
          author: {
            fullname: '이우재',
            image: null,
          },
          comment: '이것은 댓글입니다',
          updatedAt: '2021-10-15T20:48:19.816Z',
        },
        {
          author: {
            fullname: '이우재',
            image: null,
          },
          comment: '이것은 댓글입니다',
          updatedAt: '2021-10-15T20:48:19.816Z',
        },
        {
          author: {
            fullname: '이우재',
            image: null,
          },
          comment: '이것은 댓글입니다',
          updatedAt: '2021-10-15T20:48:19.816Z',
        },
      ],
    },
  },
};

export function Default(args) {
  return <CommentList {...args} />;
}
