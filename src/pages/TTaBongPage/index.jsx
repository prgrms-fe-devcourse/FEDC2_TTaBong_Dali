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

  const validationError = {
    emptyBePraised: '따봉 대상자가 없습니다.',
    emptyReason: '따봉 사유가 없습니다.',
    emptyLabels: '따봉 라벨이 없습니다.',
    lackReason: '따봉 사유를 10글자 이상 기입해 주세요.',
  };

  const handleCreatePost = async () => {
    const channel = await getSpecificChannel(Constants.CHANNE_NAME);

    if (!checkedUsers) {
      alert(validationError.emptyBePraised);
      return;
    }
    if (!reason) {
      alert(validationError.emptyReason);
      return;
    }
    if (!labelItems) {
      alert(validationError.emptyReason);
      return;
    }
    if (reason.length < 10) {
      alert(validationError.lackReason);
      return;
    }

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
      createPost(authUser.token, channel._id, post, imageSrc);
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
      <BaseCardContainer padding={[1, 1, 1, 1]}>
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
            따봉!
          </Button>
        </S.PraisePageContainer>
      </BaseCardContainer>
    </PageTemplate>
  );
};

export default TTaBongPage;
