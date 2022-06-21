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
import { createPost } from '../../apis';
import { useAuthContext } from '../../contexts/UserProvider';
import Constants from '../../commons/constants/index';

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
  const { authUser } = useAuthContext();

  const handleCreatePost = () => {
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

    postTitles.forEach((post) =>
      createPost(authUser.token, Constants.TEST_CHANNEL_ID, post, imageSrc),
    );
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
