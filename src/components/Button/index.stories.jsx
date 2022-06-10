import Button from '.';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    type: {
      defaultValue: 'skyblue',
      control: { type: 'radio' },
      options: ['skyblue', 'skyblueOutlined', 'yellow', 'yellowOutlined'],
    },
  },
};

export function Default(args) {
  return <Button {...args}>Button</Button>;
}
