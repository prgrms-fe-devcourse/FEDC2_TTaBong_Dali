import PropTypes from 'prop-types';
import * as S from './style';

const Label = ({ type = 'warm' }) => {
  const labelText = {
    warm: '따뜻',
    moved: '감동',
    praise: '칭찬',
  };

  return <S.StyledLabel type={type}>{labelText[type]}</S.StyledLabel>;
};

Label.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Label;
