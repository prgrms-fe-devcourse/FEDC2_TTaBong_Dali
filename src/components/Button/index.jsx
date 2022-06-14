import PropTypes from 'prop-types';
import * as S from './style';

const Button = ({ children, version, ...props }) => {
  return (
    <S.StyledButton version={version} {...props}>
      {children}
    </S.StyledButton>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string.isRequired,
};
