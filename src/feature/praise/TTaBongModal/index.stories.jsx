import React, { useState } from 'react';
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

  const [checkedUsers, setCheckedUsers] = useState([]);

  return (
    <Router>
      <p>
        {checkedUsers.map((user) => (
          <p>{user.fullName}</p>
        ))}
      </p>
      <button type="button" onClick={handleOpenModal}>
        SHOW
      </button>
      <TTaBongModal
        {...args}
        checkedUsers={checkedUsers}
        setCheckedUsers={setCheckedUsers}
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
