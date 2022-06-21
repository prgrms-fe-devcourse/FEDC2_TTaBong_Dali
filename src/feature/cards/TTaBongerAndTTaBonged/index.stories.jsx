import React from 'react';
import TTaBongerAndTTaBonged from '.';

export default {
  title: 'Feature/Cards/TTaBongerAndTTaBonged',
  component: TTaBongerAndTTaBonged,
  argTypes: {
    authorName: {
      defaultValue: '이우제',
      control: 'text',
    },
    receiverName: {
      defaultValue: '민상기',
      control: 'text',
    },
  },
};

export function Default(args) {
  return <TTaBongerAndTTaBonged {...args} />;
}
