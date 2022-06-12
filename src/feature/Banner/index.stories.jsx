import styled from '@emotion/styled';
import Banner from '.';
import Header from '../Header';

export default {
  title: 'feature/Banner',
  component: Banner,
  argTypes: {},
};

export function Default(args) {
  return (
    <>
      <Header />
      <Banner {...args} />
    </>
  );
}

export function Scrolldown(args) {
  const Container = styled.div`
    width: 100%;
    height: 2000px;
  `;

  return (
    <Container>
      <Banner {...args} />
    </Container>
  );
}
