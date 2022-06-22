import React from 'react';
import Divider from '.';
import theme from '../../commons/style/themes';

export default {
  title: 'components/Divider',
  component: Divider,
  argTypes: {
    size: {
      defaultValue: 300,
      control: 'number',
    },
    color: {
      defaultValue: theme.colors.gray[0],
      control: 'color',
    },
  },
};

export function Default(args) {
  return <Divider {...args} />;
}
