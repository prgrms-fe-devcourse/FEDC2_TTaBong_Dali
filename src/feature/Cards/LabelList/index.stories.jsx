import React from 'react';
import LabelList from '.';

export default {
  title: 'Feature/Cards/LabelList',
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
