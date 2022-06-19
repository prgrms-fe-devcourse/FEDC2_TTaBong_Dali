import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TTaBongModal from '.';
import { useModal } from '../../../components/Modal';

export default {
  title: 'Feature/praise/TTaBongModal',
  component: TTaBongModal,
  argTypes: {},
};

export function Default(args) {
  const {
    isModalOn,
    setIsModalOn,
    backgroundRef,
    handleOpenModal,
    handleCloseModal,
  } = useModal();

  return (
    <Router>
      <button type="button" onClick={handleOpenModal}>
        SHOW
      </button>
      <TTaBongModal
        {...args}
        modalProps={{
          isModalOn,
          setIsModalOn,
          backgroundRef,
          handleOpenModal,
          handleCloseModal,
        }}
      />
    </Router>
  );
}
