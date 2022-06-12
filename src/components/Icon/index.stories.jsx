import React from 'react';
import styled from '@emotion/styled';
import Icon from '.';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: { type: 'radio' },
      options: ['list', 'ranking', 'search', 'user', 'TTaBong'],
      defaultValue: 'ranking',
    },
    type: {
      control: { type: 'radio' },
      options: ['Fill', 'Line'],
      defaultValue: 'Fill',
    },
    size: {
      control: 'number',
      defaultValue: 10,
    },
  },
};

export function Default(args) {
  return <Icon {...args} />;
}

const TTaBongContainer = styled.div`
  background-color: grey;
`;

export function TTaBong() {
  return (
    <TTaBongContainer>
      <Icon icon="TTaBong" alt="TTaBong" />
    </TTaBongContainer>
  );
}
