import RegisterForm from '.';

export default {
  title: 'Feature/auth/RegisterForm',
  component: RegisterForm,
};

export const Default = (args) => {
  return <RegisterForm {...args} />;
};
