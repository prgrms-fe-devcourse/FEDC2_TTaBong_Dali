import ProfileEditForm from '.';

export default {
  title: 'Feature/profile/ProfileEditForm',
  component: ProfileEditForm,
  argTypes: {
    defaultValue: {
      defaultValue: { userName: '이우제' },
    },
  },
};

export const Default = (args) => {
  return <ProfileEditForm {...args} />;
};
