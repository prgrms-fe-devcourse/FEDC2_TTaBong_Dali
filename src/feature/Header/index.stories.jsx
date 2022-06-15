import React from 'react';
import Header from '.';

export default {
  title: 'Feature/Header',
  component: Header,
  argTypes: {
    isScrollDown: {
      defaultValue: false,
      control: 'boolean',
    },
    isAlarm: {
      defaultValue: true,
      control: 'boolean',
    },
  },
};
export const Default = (args) => {
  return <Header {...args} />;
};
