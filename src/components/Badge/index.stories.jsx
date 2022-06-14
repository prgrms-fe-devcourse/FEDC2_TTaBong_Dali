import React from 'react';
import Badge from '.';
import Icon from '../Icon';

export default {
  title: 'components/Badge',
  component: Badge,
  argTypes: {
    count: { defaultValue: 10, control: 'number' },
    maxCount: { defaultValue: 100, control: 'number' },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    showZero: { defaultValue: false, control: 'boolean' },
  },
};

export function Default(args) {
  return (
    <Badge {...args}>
      <Icon />
    </Badge>
  );
}

export function Dot() {
  return (
    <Badge dot>
      <Icon />
    </Badge>
  );
}
