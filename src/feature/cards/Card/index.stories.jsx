import React from 'react';
import Card from '.';

export default {
  title: 'feature/Cards/Card',
  component: Card,
  argTypes: {},
};

export function Default(args) {
  return <Card {...args} />;
}
