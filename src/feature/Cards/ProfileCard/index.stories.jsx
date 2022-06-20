import React from 'react';
import ProfileCard from '.';

export default {
  title: 'Feature/Cards/ProfileCard',
  component: ProfileCard,
  argTypes: {
    post: {
      defaultValue: {
        likes: [
          {
            _id: '62ad82bee95d2c4b38101271',
            user: '62a18f01d1b81239d875d1ea',
            post: '62a834aacab1ef0259bc540c',
            createdAt: '2022-06-18T07:46:06.402Z',
            updatedAt: '2022-06-18T07:46:06.402Z',
            __v: 0,
          },
        ],
        comments: [
          {
            _id: '62aeeccd75a1ba7a8a0a8021',
            comment: '저도 좋아요',
            author: {
              role: 'Regular',
              emailVerified: false,
              banned: false,
              isOnline: false,
              posts: [],
              likes: ['62ad82bee95d2c4b38101271'],
              comments: ['62aeeccd75a1ba7a8a0a8021'],
              followers: [],
              following: [],
              notifications: ['62aeeed175a1ba7a8a0a802f'],
              messages: [
                '62a18f7cd1b81239d875d1f0',
                '62a1904ad1b81239d875d1f7',
              ],
              _id: '62a18f01d1b81239d875d1ea',
              fullName: 'Test1',
              email: 'test@test.com',
              createdAt: '2022-06-09T06:11:13.272Z',
              updatedAt: '2022-06-19T09:39:29.440Z',
              __v: 0,
            },
            post: '62a834aacab1ef0259bc540c',
            createdAt: '2022-06-19T09:30:53.247Z',
            updatedAt: '2022-06-19T09:30:53.247Z',
            __v: 0,
          },
        ],
        _id: '62a834aacab1ef0259bc540c',
        title:
          '{"type":"TTaBong","receiver":"62a8349bcab1ef0259bc53fc","content":"트럼프 따봉"}',
        channel: {
          authRequired: false,
          posts: [
            '62a834aacab1ef0259bc540c',
            '62a834b0cab1ef0259bc541b',
            '62a834b6cab1ef0259bc5428',
            '62a834c4cab1ef0259bc5438',
            '62a834cbcab1ef0259bc5445',
            '62adc70231afab55a5ac87ea',
            '62adc72631afab55a5ac8801',
          ],
          _id: '62a19123d1b81239d875d20d',
          name: 'Test',
          description: 'Hello Test Channel',
          createdAt: '2022-06-09T06:20:19.907Z',
          updatedAt: '2022-06-18T12:37:58.432Z',
          __v: 0,
        },
        author: {
          role: 'Regular',
          emailVerified: false,
          banned: false,
          isOnline: false,
          posts: [],
          likes: [],
          comments: [],
          followers: [],
          following: [],
          notifications: [],
          messages: ['62a8349bcab1ef0259bc53fc', '62a1904ad1b81239d875d1f7'],
          _id: '62a83493cab1ef0259bc53f6',
          fullName: '오바마',
          email: 'obama',
          createdAt: '2022-06-14T07:11:15.311Z',
          updatedAt: '2022-06-18T12:37:58.478Z',
          __v: 0,
        },
        createdAt: '2022-06-14T07:11:38.935Z',
        updatedAt: '2022-06-19T09:30:53.264Z',
        __v: 0,
      },
      control: 'object',
    },
  },
};

export function Default(args) {
  return <ProfileCard {...args} />;
}
