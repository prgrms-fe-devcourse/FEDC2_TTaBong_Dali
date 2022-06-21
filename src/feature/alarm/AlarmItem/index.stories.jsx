import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AlarmItem from '.';

export default {
  title: 'feature/alarm/AlarmItem',
  component: AlarmItem,
  argTypes: {
    type: {
      defaultValue: 'like',
    },
    alarm: {
      defaultValue: {
        author: '나',
        comment: {
          comment: '',
        },
      },
    },
  },
};

const Template = (args) => (
  <Router>
    <AlarmItem {...args} />
  </Router>
);

export function Default(args) {
  return (
    <Router>
      <AlarmItem {...args} />
    </Router>
  );
}

export const Comment = Template.bind({});
Comment.argTypes = {
  type: {
    defaultValue: 'comment',
  },
  alarm: {
    defaultValue: {
      author: '나',
      comment: {
        comment: '칭찬이 즐거워',
      },
    },
  },
};
