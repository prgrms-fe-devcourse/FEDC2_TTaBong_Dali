import React from 'react';
import BaseCardContainer from '.';
import PageTemplate from '../../feature/pageTemplate/PageTemplate';
import theme from '../../commons/style/themes';

export default {
  title: 'Components/BaseCardContainer',
  component: BaseCardContainer,
  argTypes: {
    width: {
      control: {
        type: 'number',
        default: '100%',
      },
    },
    height: {
      control: {
        type: 'number',
        default: '100%',
      },
    },
    opacityType: {
      control: { type: 'radio' },
      options: [...Object.values(theme.opacity)],
    },
    backgroundColor: {
      control: {
        type: 'color',
        defaultValue: 'white',
      },
    },
    borderRadius: {
      control: {
        type: 'radio',
        options: [...Object.values(theme.borderRadius)],
      },
    },
  },
};

export function Default(args) {
  return <BaseCardContainer {...args} />;
}

export function Template(args) {
  return (
    <PageTemplate>
      <BaseCardContainer {...args}>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
      </BaseCardContainer>
    </PageTemplate>
  );
}
