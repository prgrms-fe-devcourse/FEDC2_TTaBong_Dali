import React from 'react';
import CardDetail from '.';

export default {
  title: 'Feature/Cards/CardDetail',
  component: CardDetail,
  argTypes: {
    labelTypes: {
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

export function Default(args) {
  return <CardDetail {...args} />;
}
