import styled from '@emotion/styled';
import Banner from '.';
import { useScrollDown } from '../../../hooks/useScrollDown';
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

const Container = styled.div`
  width: 100%;
  height: 2000px;
`;

export function Scrolldown(args) {
  const isScrollDowned = useScrollDown();
  return (
    <Container>
      <Header isScrollDown={isScrollDowned} />
      <Banner isScrollDown={isScrollDowned} {...args} />
    </Container>
  );
}
