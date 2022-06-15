import React from 'react';
import RankFirstInfo from '.';

export default {
  title: 'Feature/rank/RankFirstInfo',
  component: RankFirstInfo,
  argTypes: {
    userName: {
      defaultValue: '',
      control: 'text',
    },
    coin: {
      defaultValue: null,
      control: 'number',
    },
    TTaBong: {
      defaultValue: null,
      control: 'number',
    },
  },
};
export const Default = (args) => {
  return <RankFirstInfo {...args} />;
};
