import React from 'react';
import Icon from '.';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: 'text',
      defaultValue: 'list',
    },
    type: {
      control: 'text',
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
