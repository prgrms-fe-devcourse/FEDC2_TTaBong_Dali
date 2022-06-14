import InputForm from '.';

export default {
  title: 'Components/InputForm',
  component: InputForm,
  argTypes: {
    type: {
      defaultValue: 'auth',
      control: { type: 'radio' },
      options: ['search', 'comment', 'edit', 'auth'],
    },
    invalid: {
      defaultValue: false,
      control: { type: 'radio' },
      options: [true, false],
    },
    placeholder: {
      defaultValue: 'PLACE HOLDER',
    },
  },
};

export const Default = (args) => {
  return <InputForm {...args} />;
};
