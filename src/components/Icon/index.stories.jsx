import React from 'react';
import Icon from '.';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: { type: 'radio' },
      options: ['list', 'ranking', 'search', 'user', 'TTaBong'],
      defaultValue: 'ranking',
    },
    type: {
      control: { type: 'radio' },
      options: ['', 'Fill', 'Line'],
      defaultValue: 'Fill',
    },
    size: {
      constrol: 'number',
      defaultValue: 10,
    },
  },
};

export function Default(args) {
  return <Icon {...args} />;
}
