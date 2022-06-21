import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import Modal, { useModal } from '../../../components/Modal';
import BaseCardContainer from '../../../components/BaseCardContainer';
import InputForm from '../../../components/InputForm';
import UserInfoItem from '../../../components/UserInfoItem';
import theme from '../../../commons/style/themes';
import useForm from '../../../hooks/useForm';
import { getAllUsers, searchUser } from '../../../apis';

const TTaBongModal = ({ checkedUsers, setCheckedUsers, modalProps }) => {
  const { isModalOn, backgroundRef, handleCloseModal } = modalProps;

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      const allUsers = await getAllUsers(0, 100);

      setUsers(
        allUsers.map((user) => ({ ...user, searched: true, checked: false })),
      );
    };

    fetchAllUsers();
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const keyword = e.target.search.value;

    setUsers(
      users.map((user) =>
        user.fullName.startsWith(keyword)
          ? { ...user, searched: true }
          : { ...user, searched: false },
      ),
    );
  };

  const handleUserCheck = (e, userId) => {
    e.preventDefault(); // 5명까지만

    const newUsers = users.map((user) =>
      user._id !== userId ? user : { ...user, checked: !user.checked },
    );

    const newCheckdUsers = newUsers.filter((user) => user.checked);

    if (newCheckdUsers.length > 5) return;

    setUsers(newUsers);

    setCheckedUsers(newCheckdUsers);
  };

  return (
    <Modal
      width={305}
      height={320}
      isModalOn={isModalOn}
      backgroundRef={backgroundRef}
      handleCloseModal={handleCloseModal}
      backgroundColor="white"
      backgroundOpacity={0.7}
    >
      <BaseCardContainer
        overflow="auto"
        backgroundColor={`${theme.colors.yellow[1]}`}
      >
        <S.SearchInputForm
          version="search"
          name="search"
          placeholder="search..."
          onSubmit={handleSearchSubmit}
          width="100%"
        />
        <S.UserInfoItemContainer>
          {users
            .filter((user) => user.searched)
            .map((user) => (
              <S.UserInfoItemWrapper
                key={user._id}
                onClick={(e) => handleUserCheck(e, user._id)}
              >
                <UserInfoItem
                  userName={user.fullName}
                  useCheck
                  checked={user.checked}
                  useNav={false}
                />
              </S.UserInfoItemWrapper>
            ))}
        </S.UserInfoItemContainer>
      </BaseCardContainer>
    </Modal>
  );
};

TTaBongModal.propTypes = {};

export default TTaBongModal;
