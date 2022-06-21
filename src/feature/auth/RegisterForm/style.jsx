import styled from '@emotion/styled';
import InputForm from '../../../components/InputForm';
import Button from '../../../components/Button';

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RegisterInput = styled(InputForm)`
  margin-bottom: 22px;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.darkgray[2]};
`;

export const Nav = styled.nav`
  color: ${({ theme }) => theme.colors.darkgray[2]};
  font-size: 12px;
  cursor: pointer;
`;

export const RegisterButton = styled(Button)`
  margin-top: 49px;
  margin-bottom: 18px;
`;
