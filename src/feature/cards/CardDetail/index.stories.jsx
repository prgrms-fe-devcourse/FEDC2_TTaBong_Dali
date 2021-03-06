import React from 'react';
import CardDetail from '.';

export default {
  title: 'feature/cards/CardDetail',
  component: CardDetail,
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
    img: {
      defaultValue: 'https://picsum.photos/200',
      control: 'text',
    },
    likeCount: {
      defaultValue: '5',
      control: 'number',
    },
    PraiseReason: {
      defaultValue: '열심히 해서',
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
  return <CardDetail {...args} />;
}
