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
      defaultValue: '-1',
      control: 'number',
    },
    TTaBong: {
      defaultValue: '-1',
      control: 'number',
    },
  },
};
export const Default = (args) => {
  return <RankFirstInfo {...args} />;
};
