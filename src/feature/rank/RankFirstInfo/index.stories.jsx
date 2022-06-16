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
    coinCount: {
      defaultValue: '-1',
      control: 'number',
    },
    TTaBongCount: {
      defaultValue: '-1',
      control: 'number',
    },
  },
};
export const Default = (args) => {
  return <RankFirstInfo {...args} />;
};
