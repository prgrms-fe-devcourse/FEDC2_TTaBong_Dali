import styled from '@emotion/styled';
import Logo from '.';

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {
    type: {
      defaultValue: 'white',
      control: { type: 'radio' },
      options: ['white', 'skyblue'],
    },
  },
};

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.gray[0]};
  height: 32px;
`;

export const Default = (args) => {
  return (
    <Wrapper>
      <Logo {...args} />
    </Wrapper>
  );
};
