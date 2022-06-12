import React from 'react';
import styled from '@emotion/styled';
import Icon from '.';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: [
          'listFill',
          'listLine',
          'rankingFill',
          'rankingLine',
          'searchFill',
          'searchLine',
          'userFill',
          'userLine',
          'TTaBongWhite',
        ],
      },
      defaultValue: 'listFill',
    },
    size: {
      control: 'number',
      defaultValue: 20,
    },
  },
};

export function Default(args) {
  return <Icon {...args} />;
}

const TTaBongWhiteContainer = styled.div`
  padding: 1rem;
  background-color: grey;
`;

export function TTaBongWhite() {
  return (
    <TTaBongWhiteContainer>
      <Icon name="TTaBongWhite" />
    </TTaBongWhiteContainer>
  );
}
