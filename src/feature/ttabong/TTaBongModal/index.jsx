import React, { useState, useEffect, useCallback } from 'react';
import * as S from './style';
import Modal from '../../../components/Modal';
import BaseCardContainer from '../../../components/BaseCardContainer';
import UserInfoItem from '../../../components/UserInfoItem';
import theme from '../../../commons/style/themes';
import { getAllUsers } from '../../../apis';
import { useAuthContext } from '../../../contexts/UserProvider';

const TTaBongModal = ({ setCheckedUsers, modalProps }) => {
  const { isModalOn, backgroundRef, handleCloseModal } = modalProps;

  const { authUser } = useAuthContext();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      const allUsers = await getAllUsers(0, 100);

      setUsers(
        allUsers
          .filter((user) => user._id !== authUser.userId)
          .map((user) => ({ ...user, searched: true, checked: false })),
      );
    };

    fetchAllUsers();
  }, []);

  const handleSearchSubmit = (e) => {
    const keyword = e;

    setUsers(
      users.map((user) =>
        user.fullName.indexOf(keyword) >= 0
          ? { ...user, searched: true }
          : { ...user, searched: false },
      ),
    );
  };

  const handleUserCheck = (e, userId) => {
    e.preventDefault();

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
                  user={user}
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

export default TTaBongModal;
