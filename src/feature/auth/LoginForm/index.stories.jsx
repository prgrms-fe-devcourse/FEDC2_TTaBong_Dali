import LoginForm from '.';

export default {
  title: 'Feature/auth/LoginForm',
  component: LoginForm,
  //   argTypes: {
  //     type: {
  //       defaultValue: 'white',
  //       control: { type: 'radio' },
  //       options: ['white', 'skyblue'],
  //     },
  //   },
};

export const Default = (args) => {
  return <LoginForm {...args} />;
};
