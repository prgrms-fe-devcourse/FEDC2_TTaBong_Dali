import { useState } from 'react';
import useTimeout from '../../hooks/useTimeOut';
import * as S from './style';

const ToastItem = ({ id, message, duration, onDone }) => {
  const [show, setShow] = useState(true);

  useTimeout(() => {
    setShow(false);
    setTimeout(() => onDone(), 400);
  }, duration);

  return (
    <S.ItemContainer style={{ opacity: show ? 1 : 0 }}>
      <S.ProgressBar style={{ animationDuration: `${duration}ms` }} />
      <S.Message>{message}</S.Message>
    </S.ItemContainer>
  );
};

export default ToastItem;
