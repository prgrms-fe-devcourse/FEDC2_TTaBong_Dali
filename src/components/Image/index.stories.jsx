import React from 'react';
import Image from '.';

export default {
  title: 'components/Image',
  component: Image,
  argTypes: {
    src: {
      defaultValue: 'https://picsum.photos/200',
      control: 'text',
    },
    width: {
      defaultValue: 100,
      control: 'number',
    },
    height: {
      defaultValue: 100,
      control: 'number',
    },
    mode: {
      defaultValue: 'cover',
      options: ['cover', 'fill', 'contain'],
      control: { type: 'inline-radio' },
    },
  },
};

export function Default(args) {
  return <Image {...args} />;
}
