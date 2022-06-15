import React from 'react';
import Tab, { TabItem } from './index';

export default {
  title: 'Components/Tab',
  component: Tab,
  argTypes: {
    activeIndex: {
      control: 'number',
      defaultValue: 0,
    },
    active: {
      control: 'boolean',
      defaultValue: true,
    },
  },
};

export const Default = (args) => {
  return (
    <Tab {...args}>
      <TabItem>따봉왕</TabItem>
      <TabItem>코인왕</TabItem>
    </Tab>
  );
};

export const Item = (args) => {
  return <TabItem {...args}>코인왕</TabItem>;
};
