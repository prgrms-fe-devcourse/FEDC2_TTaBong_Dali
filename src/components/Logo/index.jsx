import PropTypes from 'prop-types';
import * as S from './style';

const Logo = ({ type = 'white', ...styles }) => (
  <S.Logo type={type} {...styles}>
    TTA BONG
  </S.Logo>
);

export default Logo;

Logo.propTypes = {
  type: PropTypes.string,
  type: PropTypes.string,
};
