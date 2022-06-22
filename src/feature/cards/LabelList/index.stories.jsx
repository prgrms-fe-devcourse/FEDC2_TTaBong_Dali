import React from 'react';
import LabelList from '.';

export default {
  title: 'feature/cards/LabelList',
  component: LabelList,
  argTypes: {
    labelItems: {
      defaultValue: ['moved', 'praise', 'warm'],
    },
  },
};

export function Default(args) {
  return <LabelList {...args} />;
}
