import PropTypes from 'prop-types';
import * as S from './style';

const Label = ({ type = '', children, onClick }) => {
  const labelText = {
    warm: '따뜻',
    moved: '감동',
    praise: '칭찬',
  };

  return (
    <S.StyledLabel type={type} onClick={onClick}>
      {type ? labelText[type] : children}
    </S.StyledLabel>
  );
};

Label.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
};

export default Label;
