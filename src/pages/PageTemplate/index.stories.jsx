import React from 'react';
import PageTemplate from '.';

// 'mainFeed', 'ranking', 'search', 'user'
export default {
  title: 'Component/PageTemplate',
  component: PageTemplate,
  argTypes: {
    page: {
      defaultValue: 'mainFeed',
      control: 'radio',
      options: ['mainFeed', 'ranking', 'search', 'user'],
    },
  },
};
export const Default = (args) => {
  return <PageTemplate {...args} />;
};
