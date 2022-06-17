import PropTypes from 'prop-types';
import * as S from './style';

const Logo = ({ type = 'white', ...props }) => (
  <S.Logo type={type} {...props}>
    TTA BONG
  </S.Logo>
);

export default Logo;

Logo.propTypes = {
  type: PropTypes.string, // lint적용되면 isRequired 제거
};
