import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTemplate from '../../feature/pageTemplate/PageTemplate';
import * as S from './style';
import { useModal } from '../../components/Modal';
import {
  ImageUploadContainer,
  LabelList,
  ReasonContainer,
  TTaBongModal,
} from '../../feature/ttabong';
import Divider from '../../components/Divider';
import Button from '../../components/Button';
import Avatar from '../../components/Avatar';
import { createPost, getSpecificChannel } from '../../apis';
import { useAuthContext } from '../../contexts/UserProvider';
import Constants from '../../commons/constants/index';
import BaseCardContainer from '../../components/BaseCardContainer';

const TTaBongPage = () => {
  const navigator = useNavigate();

  const modalProps = useModal();
  const [checkedUsers, setCheckedUsers] = useState([]);
  const [reason, setReason] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [labelItems, setLabelItems] = useState({
    praise: '',
    moved: '',
    warm: '',
  });
  const { authUser } = useAuthContext();

  const handleCreatePost = async () => {
    const channel = await getSpecificChannel(Constants.CHANNE_NAME);

    const postTitles = checkedUsers.map((user) =>
      JSON.stringify({
        type: 'TTaBong',
        receiver: {
          _id: user._id,
          fullName: user.fullName,
        },
        content: reason,
        labels: labelItems,
      }),
    );
    postTitles.forEach((post) => {
      const formData = new FormData();
      formData.append('title', post);
      formData.append('image', imageSrc);
      formData.append('channelId', channel._id);
      createPost(authUser.token, formData);
    });

    navigator('/');
  };

  return (
    <PageTemplate page="TTaBong">
      <TTaBongModal
        checkedUsers={checkedUsers}
        setCheckedUsers={setCheckedUsers}
        modalProps={modalProps}
      />
      <BaseCardContainer>
        <S.PraisePageContainer>
          <S.BePraisedContainer onClick={modalProps.handleOpenModal}>
            <S.BePraisedLabelWrapper>칭찬 대상자</S.BePraisedLabelWrapper>
            <S.BePraisedAvatarContainer>
              {checkedUsers.map((user) => (
                <S.BePraisedAvatarWrapper key={user._id}>
                  <Avatar size={30} avatarName={user.fullName} ellipsis />
                </S.BePraisedAvatarWrapper>
              ))}
            </S.BePraisedAvatarContainer>
          </S.BePraisedContainer>
          <Divider />
          <ReasonContainer reason={reason} setReason={setReason} />
          <ImageUploadContainer imageSrc={imageSrc} setImageSrc={setImageSrc} />
          <LabelList labelItems={labelItems} setLabelItems={setLabelItems} />
          <Button version="yellow" width="100%" onClick={handleCreatePost}>
            칭찬하기
          </Button>
        </S.PraisePageContainer>
      </BaseCardContainer>
    </PageTemplate>
  );
};

export default TTaBongPage;
