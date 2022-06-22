import { useCallback, useEffect, useState } from 'react';
import ToastItem from './ToastItem';
import * as S from './style';

const ToastManager = ({ bind }) => {
  const [toasts, setToasts] = useState([]);

  const createToast = useCallback((message, duration) => {
    const newToast = {
      id: Math.random(),
      message,
      duration,
    };
    setToasts((oldToasts) => [...oldToasts, newToast]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((oldToasts) => oldToasts.filter((toast) => toast.id !== id));
  }, []);

  useEffect(() => {
    bind(createToast);
  }, [bind, createToast]);

  return (
    <S.ToastContainer>
      {toasts.map(({ id, message, duration }) => (
        <ToastItem
          message={message}
          duration={duration}
          key={id}
          onDone={() => removeToast(id)}
        />
      ))}
    </S.ToastContainer>
  );
};

export default ToastManager;
