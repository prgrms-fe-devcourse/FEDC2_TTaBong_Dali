import React from 'react';
import Tab, { TabItem } from './index';

export default {
  title: 'Components/Tab',
  component: Tab,
  argTypes: {
    clicked: {
      control: 'boolean',
      defaultValue: true,
    },
  },
};

export const Default = (args) => {
  return <TabItem {...args}>코인왕</TabItem>;
};
