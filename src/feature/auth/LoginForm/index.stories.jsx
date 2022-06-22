import LoginForm from '.';

export default {
  title: 'Feature/auth/LoginForm',
  component: LoginForm,
};

export const Default = (args) => {
  return <LoginForm {...args} />;
};
