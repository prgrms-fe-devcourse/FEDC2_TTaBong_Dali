import PropTypes from 'prop-types';
import * as S from './style';
import removeIcon from '../../assets/icon_remove.svg';
import searchIconBlue from '../../assets/icon_search_blue.svg';

const InputForm = ({
  type = 'text',
  version = 'auth',
  inputType = '아이디',
  invalid = false,
  placeholder,
  onSubmit,
  ...props
}) => {
  if (version === 'comment') {
    return (
      <S.CommentContainer onSubmit={onSubmit} {...props}>
        <S.PlacedAvatar size="30" />
        <S.InputBox version={version}>
          <S.Input type={type} version={version} placeholder={placeholder} />
        </S.InputBox>
        <S.ButtonBox>
          <S.CommentButton>게시</S.CommentButton>
        </S.ButtonBox>
      </S.CommentContainer>
    );
  }
  if (version === 'search') {
    return (
      <S.SearhContainer onSubmit={onSubmit} {...props}>
        <S.InputBox>
          <S.Input type={type} placeholder={placeholder} />
          <S.ButtonBox>
            <S.SearchButton src={searchIconBlue} alt="검색" />
          </S.ButtonBox>
        </S.InputBox>
      </S.SearhContainer>
    );
  }
  if (version === 'edit') {
    return (
      <S.EditContainer>
        <S.InputTypeLabel version={version}>{inputType}</S.InputTypeLabel>
        <S.InputBox version={version} invalid={invalid} {...props}>
          <S.Input type={type} placeholder={placeholder} />
          <S.ButtonBox>
            <S.RemoveButton src={removeIcon} alt="지우기" />
          </S.ButtonBox>
        </S.InputBox>
      </S.EditContainer>
    );
  }
  // auth
  return (
    <S.AuthContainer>
      <S.InputTypeLabel>{inputType}</S.InputTypeLabel>
      <S.InputBox invalid={invalid} {...props}>
        <S.Input type={type} placeholder={placeholder} />
        <S.ButtonBox>
          <S.RemoveButton src={removeIcon} alt="지우기" />
        </S.ButtonBox>
      </S.InputBox>
    </S.AuthContainer>
  );
};

export default InputForm;

InputForm.propTypes = {
  type: PropTypes.string.isRequired, // lint적용되면 isRequired 제거
  version: PropTypes.string.isRequired, // lint적용되면 isRequired 제거
  inputType: PropTypes.string.isRequired, // lint적용되면 isRequired 제거
  invalid: PropTypes.string.isRequired, // lint적용되면 isRequired 제거
  placeholder: PropTypes.string.isRequired, // lint적용되면 isRequired 제거
};
