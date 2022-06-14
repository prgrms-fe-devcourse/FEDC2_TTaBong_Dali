import * as S from './style';

function Button({ children, type, ...props }) {
  return (
    <S.StyledButton type={type} {...props}>
      {children}
    </S.StyledButton>
  );
}

export default Button;
