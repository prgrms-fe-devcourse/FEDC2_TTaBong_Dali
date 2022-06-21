import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Modal, { useModal } from '.';

export default {
  title: 'Components/Modal',
  component: Modal,
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
      <div>
        <Modal
          {...args}
          width={100}
          height={100}
          isModalOn={isModalOn}
          backgroundRef={backgroundRef}
          handleCloseModal={(e) => handleCloseModal(e)}
        >
          <div style={{ backgroundColor: 'white' }}> hello world</div>
        </Modal>
        <div>
          <button type="button" onClick={handleOpenModal}>
            SHOW
          </button>
        </div>
      </div>
    </Router>
  );
}
