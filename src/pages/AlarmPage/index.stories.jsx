import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AlarmPage from '.';

export default {
  title: 'pages/AlarmPage',
  component: AlarmPage,
  argTypes: {
    alarms: { title: {}, defaultValue: [{}] },
  },
};

export function Default(args) {
  return (
    <Router>
      <AlarmPage {...args} />
    </Router>
  );
}
