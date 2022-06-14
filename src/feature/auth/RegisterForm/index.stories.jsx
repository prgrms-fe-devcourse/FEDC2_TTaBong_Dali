import RegisterForm from '.';

export default {
  title: 'Feature/auth/RegisterForm',
  component: RegisterForm,
  //   argTypes: {
  //     type: {
  //       defaultValue: 'white',
  //       control: { type: 'radio' },
  //       options: ['white', 'skyblue'],
  //     },
  //   },
};

export const Default = (args) => {
  return <RegisterForm {...args} />;
};
