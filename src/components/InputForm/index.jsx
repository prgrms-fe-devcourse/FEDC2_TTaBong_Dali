import { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import removeIcon from '../../assets/icon_remove.svg';
import searchIconBlue from '../../assets/icon_search_blue.svg';

const InputForm = ({
  name = '',
  type = 'text',
  version = 'auth',
  inputType = '아이디',
  placeholder,
  onSubmit,
  onChange,
  removeAll,
  errors,
  ...props
}) => {
  const [input, setInput] = useState('');

  const onChangeInput = (e) => {
    setInput(e.target.value);
    onChange(e);
  };

  const removeAllInput = () => {
    setInput('');
    removeAll(name);
  };

  if (version === 'comment') {
    return (
      <S.CommentContainer onSubmit={onSubmit} {...props}>
        <S.PlacedAvatar size="30" />
        <S.InputBox version={version}>
          <S.Input
            name={name}
            type={type}
            version={version}
            placeholder={placeholder}
          />
        </S.InputBox>
        <S.ButtonBox>
          <S.CommentButton type="submit">게시</S.CommentButton>
        </S.ButtonBox>
      </S.CommentContainer>
    );
  }
  if (version === 'search') {
    return (
      <S.SearchContainer onSubmit={onSubmit} {...props}>
        <S.InputBox>
          <S.Input name={name} type={type} placeholder={placeholder} />
        </S.InputBox>
        <S.ButtonBox>
          <S.SearchButton type="submit" src={searchIconBlue} alt="검색" />
        </S.ButtonBox>
      </S.SearchContainer>
    );
  }
  if (version === 'edit') {
    // -> Input
    return (
      <S.EditContainer {...props}>
        <S.InputTypeLabel version={version}>{inputType}</S.InputTypeLabel>
        <S.InputBox version={version} invalid={errors[name]}>
          <S.Input
            name={name}
            type={type}
            placeholder={placeholder}
            value={input}
            onChange={onChangeInput}
          />
          <S.ButtonBox>
            <S.RemoveButton
              src={removeIcon}
              alt="지우기"
              onClick={() => removeAllInput(name)}
            />
          </S.ButtonBox>
        </S.InputBox>
        {name && errors[name] && <S.Errors>{errors[name]}</S.Errors>}
      </S.EditContainer>
    );
  }
  // auth -> Input
  return (
    <S.AuthContainer {...props}>
      <S.InputTypeLabel>{inputType}</S.InputTypeLabel>
      <S.InputBox version={version} invalid={errors[name]}>
        <S.Input
          name={name}
          type={type}
          placeholder={placeholder}
          value={input}
          onChange={onChangeInput}
        />
        <S.ButtonBox>
          <S.RemoveButton
            src={removeIcon}
            alt="지우기"
            onClick={() => removeAllInput(name)}
          />
        </S.ButtonBox>
      </S.InputBox>
      {name && errors[name] && <S.Errors>{errors[name]}</S.Errors>}
    </S.AuthContainer>
  );
};

export default InputForm;

InputForm.propTypes = {
  name: PropTypes.string.isRequired, // lint적용되면 isRequired 제거
  type: PropTypes.string.isRequired, // lint적용되면 isRequired 제거
  version: PropTypes.string.isRequired, // lint적용되면 isRequired 제거
  inputType: PropTypes.string.isRequired, // lint적용되면 isRequired 제거
  placeholder: PropTypes.string.isRequired, // lint적용되면 isRequired 제거
  errors: PropTypes.object.isRequired, // lint적용되면 isRequired 제거
};