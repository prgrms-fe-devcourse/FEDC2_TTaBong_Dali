import React from 'react';
import Header from '.';

export default {
  title: 'Feature/Header',
  component: Header,
  argTypes: {},
};
export const Default = (args) => {
  return <Header {...args} />;
};
