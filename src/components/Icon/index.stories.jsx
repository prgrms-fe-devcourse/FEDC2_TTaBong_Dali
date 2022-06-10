import React from 'react';
import Icon from '.';
import User from '../../assets/icon_ranking_line.svg';

export default {
  title: 'Component/Icon',
  component: Icon,
  argTypes: {
    src: {
      defaultValue: User,
    },
    size: {
      defaultValue: 10,
    },
  },
};

export function Default(args) {
  return <Icon {...args} />;
}
