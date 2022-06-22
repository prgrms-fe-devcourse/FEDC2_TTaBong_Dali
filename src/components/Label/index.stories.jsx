import React from 'react';
import Label from '.';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    type: {
      defaultValue: 'warm',
      control: { type: 'radio' },
      options: ['warm', 'moved', 'praise', ''],
    },
    children: {
      defaultValue: '',
      control: { type: 'text' },
    },
  },
};
export const Default = (args) => {
  return <Label {...args} />;
};
