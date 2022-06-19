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

const TTaBongModal = ({ modalProps }) => {
  const {
    isModalOn,
    setIsModalOn,
    backgroundRef,
    handleOpenModal,
    handleCloseModal,
  } = modalProps;

  const [users, setUsers] = useState([]);
  const [searched, setSearched] = useState([]);

  useEffect(async () => {
    const fetchAllUsers = async () => {
      const allUsers = await getAllUsers(0, 100);

      setUsers(allUsers);
      setSearched(allUsers);
    };

    fetchAllUsers();
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const keyword = e.target.search.value;

    const searchedUsers = users.filter((user) =>
      user.fullName.startsWith(keyword),
    );

    setSearched(searchedUsers);
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
          width="285px"
        />
        <S.UserInfoItemContainer>
          {searched.map((user) => (
            <S.UserInfoItemWrapper>
              <UserInfoItem userName={user.fullName} />
            </S.UserInfoItemWrapper>
          ))}
        </S.UserInfoItemContainer>
      </BaseCardContainer>
    </Modal>
  );
};

TTaBongModal.propTypes = {};

export default TTaBongModal;
