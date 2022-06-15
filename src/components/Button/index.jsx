import PropTypes from 'prop-types';
import * as S from './style';

const Button = ({ children, type, version, ...props }) => {
  return (
    <S.StyledButton type={type} version={version} {...props}>
      {children}
    </S.StyledButton>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired, // 지우기
  version: PropTypes.string.isRequired, // 지우기
};
