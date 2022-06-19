import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export const useModal = () => {
  const [isModalOn, setIsModalOn] = useState(false);
  const backgroundRef = useRef();

  const handleOpenModal = () => {
    setIsModalOn(true);
  };

  const handleCloseModal = (e) => {
    if (e.target !== backgroundRef.current) return;

    setIsModalOn(false);
  };

  return {
    isModalOn,
    setIsModalOn,
    backgroundRef,
    handleOpenModal,
    handleCloseModal,
  };
};

const Modal = ({
  children,
  width,
  height,
  isModalOn,
  backgroundRef,
  handleCloseModal,
}) => {
  return (
    <S.ModalContainer isModalOn={isModalOn}>
      <S.BackgroundContainer onClick={handleCloseModal} ref={backgroundRef}>
        <S.ContentContainer width={width} height={height}>
          {children}
        </S.ContentContainer>
      </S.BackgroundContainer>
    </S.ModalContainer>
  );
};

Modal.propTypes = {};

export default Modal;
