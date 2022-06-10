import * as S from './style';

function Button({ children, type }) {
  return <S.StyledButton type={type}>{children}</S.StyledButton>;
}

export default Button;
