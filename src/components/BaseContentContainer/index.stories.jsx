import React from 'react';
import BaseContentContainer from '.';
import PageTemplate from '../../pages/PageTemplate';

export default {
  title: 'Components/BaseContentContainer',
  component: BaseContentContainer,
  argTypes: {
    opacity: {
      control: 'number',
    },
  },
};

export function Default(args) {
  return <BaseContentContainer {...args} />;
}

export function Template(args) {
  return (
    <PageTemplate>
      <BaseContentContainer {...args} />
    </PageTemplate>
  );
}
