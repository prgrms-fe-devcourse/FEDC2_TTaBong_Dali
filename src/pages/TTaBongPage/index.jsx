import React, { useState } from 'react';
import { ThemeContext } from '@emotion/react';
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
import theme from '../../commons/style/themes';
import { createPost, getSpecificChannel } from '../../apis';

const TTaBongPage = () => {
  const modalProps = useModal();
  const [checkedUsers, setCheckedUsers] = useState([]);
  const [reason, setReason] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [labelItems, setLabelItems] = useState({
    praise: '',
    moved: '',
    warm: '',
  });

  const TEMP_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYyYWFlZTk0ZTNmNTUyNzQ1MTBjYTA0MyIsImVtYWlsIjoid29vamVycnkzQG5hdmVyLmNvbSJ9LCJpYXQiOjE2NTU1NTg3NzJ9.FilLBV8W7l3OH-kWxIIJ4JBFLBjXFRSh_xoHMzLsJKg';
  const TEMP_CHANNEL_NAME = 'Test';

  const handleCreatePost = async () => {
    const channel = await getSpecificChannel(TEMP_CHANNEL_NAME);

    // recevier array????????????????
    const postTitle = JSON.stringify({
      type: 'TTaBong',
      receiver: {
        _id: checkedUsers[0]._id,
        fullName: checkedUsers[0].fullName,
      },
      content: reason,
      labels: labelItems,
    });

    const createdPost = await createPost(
      TEMP_TOKEN,
      channel._id,
      postTitle,
      imageSrc,
    );

    console.log('post created');
    console.log(createdPost);
  };

  return (
    <PageTemplate page="TTaBong">
      <TTaBongModal
        checkedUsers={checkedUsers}
        setCheckedUsers={setCheckedUsers}
        modalProps={modalProps}
      />
      <S.PraisePageContainer>
        <S.BePraisedContainer onClick={modalProps.handleOpenModal}>
          <S.BePraisedLabelWrapper>칭찬 대상자</S.BePraisedLabelWrapper>
          <S.BePraisedCard
            width="100%"
            height={80}
            backgroundColor={theme.colors.yellow[1]}
            borderRadius="11px"
            padding={[1, 0.5, 0, 0.5]}
          >
            <S.BePraisedAvatarContainer>
              {checkedUsers.map((user) => (
                <S.BePrasedAvatarWrapper key={user._id}>
                  <Avatar size={30} avatarName={user.fullName} ellipsis />
                </S.BePrasedAvatarWrapper>
              ))}
            </S.BePraisedAvatarContainer>
          </S.BePraisedCard>
        </S.BePraisedContainer>
        <Divider size={308} />
        <S.PraiseReasonContainer>
          <ReasonContainer reason={reason} setReason={setReason} />
        </S.PraiseReasonContainer>
        <S.ImageUploaderContainer>
          <ImageUploadContainer imageSrc={imageSrc} setImageSrc={setImageSrc} />
        </S.ImageUploaderContainer>
        <S.LabelListContainer>
          <LabelList labelItems={labelItems} setLabelItems={setLabelItems} />
        </S.LabelListContainer>
        <S.PraiseButtonContainer>
          <Button version="yellow" width="100%" onClick={handleCreatePost}>
            칭찬하기
          </Button>
        </S.PraiseButtonContainer>
      </S.PraisePageContainer>
    </PageTemplate>
  );
};

export default TTaBongPage;
