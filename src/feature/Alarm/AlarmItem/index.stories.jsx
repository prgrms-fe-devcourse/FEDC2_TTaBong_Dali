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
    author: { defaultValue: '나' },
    commentContent: { defaultValue: '' },
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
  author: { defaultValue: '나' },
  commentContent: { defaultValue: '칭찬이 즐거워' },
};
