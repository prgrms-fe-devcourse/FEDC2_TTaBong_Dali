import * as S from './style';

const ReasonContainer = ({ reason, setReason }) => {
  const onChangeText = (event) => {
    // event.target.value를 상위 컴포넌트(칭찬하기 페이지로 보내면 될듯합니다)
    const { value } = event.target;

    setReason(value);
  };

  return (
    <S.StyledTextarea
      value={reason}
      placeholder="따봉 사유"
      onChange={onChangeText}
    />
  );
};

export default ReasonContainer;
