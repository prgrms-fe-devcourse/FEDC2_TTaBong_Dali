import Button from '.';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    version: {
      defaultValue: 'skyblue',
      control: { type: 'radio' },
      options: ['skyblue', 'skyblueOutlined', 'yellow', 'yellowOutlined'],
    },
  },
};

export function Default(args) {
  return <Button {...args}>Button</Button>;
}
