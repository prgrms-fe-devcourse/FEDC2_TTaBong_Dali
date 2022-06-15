import styled from '@emotion/styled';
import InputForm from '../../../components/InputForm';
import Button from '../../../components/Button';

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginInput = styled(InputForm)`
  margin-bottom: 22px;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.darkgray[2]};
`;

export const Nav = styled.nav`
  margin: 0 4px;
  cursor: pointer;
  font-size: 12px;
`;

export const NavDivider = styled.div`
  margin-bottom: 4px;
`;

export const LoginButton = styled(Button)`
  margin: 18px 0;
`;
