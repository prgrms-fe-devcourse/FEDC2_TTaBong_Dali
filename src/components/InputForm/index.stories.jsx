import { useState } from 'react';
import InputForm from '.';

export default {
  title: 'Components/InputForm',
  component: InputForm,
  argTypes: {
    version: {
      defaultValue: 'auth',
      control: { type: 'radio' },
      options: ['search', 'comment', 'edit', 'auth'],
    },
    placeholder: {
      defaultValue: 'PLACE HOLDER',
    },
    errors: {
      defaultValue: {},
    },
  },
};

export const Default = (args) => {
  const [value, setValue] = useState('');
  const { version } = args;

  if (version === 'search' || version === 'comment') {
    return <InputForm {...args} />;
  } // version === 'auth' ||version === 'edit'
  return (
    <InputForm
      value={value}
      onChange={(e) => setValue(e.target.value)}
      removeAll={() => setValue('')}
      {...args}
    />
  );
};
