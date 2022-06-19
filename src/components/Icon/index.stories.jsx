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
          'rank',
          'rank',
          'searchFill',
          'searchLine',
          'userFill',
          'userLine',
        ],
      },
      defaultValue: 'listFill',
    },
    size: {
      control: 'number',
      defaultValue: 20,
    },
    alt: {
      control: 'string',
      defaultValue: '각 아이콘에 맞는 alt가 들어갈 예정',
      table: {
        disabled: true,
      },
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
      <Icon name="TTaBongWhite" alt="따봉 아이콘" />
    </TTaBongWhiteContainer>
  );
}
