import PropTypes from 'prop-types';
import * as S from './style';

const Label = ({ type = 'warm' }) => {
  return (
    <S.StyledLabel type={type}>
      {type === 'warm' ? '따뜻' : type === 'moved' ? '감동' : '칭찬'}
    </S.StyledLabel>
  );
};

Label.propTypes = {
  type: PropTypes.number.isRequired,
};

export default Label;
