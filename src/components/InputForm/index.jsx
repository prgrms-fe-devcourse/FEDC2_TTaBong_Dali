import PropTypes from 'prop-types';
import * as S from './style';
import removeIcon from '../../assets/icon_remove.svg';
import searchIconBlue from '../../assets/icon_search_blue.svg';

const InputForm = ({ type, invalid, placeholder, onSubmit, ...props }) => {
  if (type === 'comment') {
    return (
      <S.CommentContainer {...props} onSubmit={onSubmit}>
        <S.PlacedAvatar size="30" />
        <S.InputForm type={type}>
          <S.Input type={type} placeholder={placeholder} />
        </S.InputForm>
        <S.ButtonBox>
          <S.CommentButton>게시</S.CommentButton>
        </S.ButtonBox>
      </S.CommentContainer>
    );
  }
  if (type === 'search') {
    return (
      <S.SearhContainer {...props} onSubmit={onSubmit}>
        <S.InputForm>
          <S.Input placeholder={placeholder} />
          <S.ButtonBox>
            <S.SearchButton src={searchIconBlue} alt="검색" />
          </S.ButtonBox>
        </S.InputForm>
      </S.SearhContainer>
    );
  }
  return (
    <S.InputForm invalid={invalid} {...props}>
      <S.Input placeholder={placeholder} />
      <S.ButtonBox>
        <S.RemoveButton src={removeIcon} alt="지우기" />
      </S.ButtonBox>
    </S.InputForm>
  );
};

export default InputForm;

InputForm.propTypes = {
  type: PropTypes.string.isRequired,
  invalid: PropTypes.string.isRequired, // lint적용되면 isRequired 제거
  placeholder: PropTypes.string.isRequired, // lint적용되면 isRequired 제거
};
