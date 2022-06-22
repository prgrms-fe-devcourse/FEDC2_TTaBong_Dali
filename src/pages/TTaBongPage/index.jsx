import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTemplate from '../../feature/pageTemplate/PageTemplate';
import * as S from './style';
import { useModal } from '../../components/Modal';
import ImageUploadContainer from '../../components/ImageUploadContainer';
import {
  LabelList,
  ReasonContainer,
  TTaBongModal,
} from '../../feature/ttabong';
import Toast from '../../components/Toast';
import Divider from '../../components/Divider';
import Button from '../../components/Button';
import Avatar from '../../components/Avatar';
import { createPost } from '../../apis';
import { useAuthContext } from '../../contexts/UserProvider';
import Constants from '../../commons/constants/index';
import BaseCardContainer from '../../components/BaseCardContainer';
import { useChannelContext } from '../../contexts/ChannelProvider';

const TTaBongPage = () => {
  const { TTaBong, BigTTaBong } = Constants;

  const { authUser } = useAuthContext();
  const { channel } = useChannelContext();
  const { channelId } = channel;

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

  const handleCreatePost = async (type) => {
    const validationError = {
      emptyBePraised: '따봉 대상자가 없습니다.',
      emptyReason: '따봉 사유가 없습니다.',
      emptyLabels: '따봉 라벨이 없습니다.',
      lackReason: '따봉 사유를 10글자 이상 기입해 주세요.',
      toomuchBePraised: '빅따봉은 1명만 가능합니다.',
    };

    if (!checkedUsers) {
      Toast.show(validationError.emptyBePraised);
      return;
    }
    if (!reason) {
      Toast.show(validationError.emptyReason);
      return;
    }
    if (!labelItems) {
      Toast.show.show(validationError.emptyReason);
      return;
    }
    if (reason.length < 10) {
      Toast.show(validationError.lackReason);
      return;
    }
    if (type === BigTTaBong && checkedUsers.length > 1) {
      Toast.show(validationError.toomuchBePraised);
      return;
    }

    const postTitles = checkedUsers.map((user) =>
      JSON.stringify({
        type,
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
      formData.append('channelId', channelId);
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
      <BaseCardContainer padding={[1, 1, 1, 1]}>
        <S.PraisePageContainer>
          <S.BePraisedContainer onClick={modalProps.handleOpenModal}>
            <S.BePraisedLabelWrapper>따봉 대상자</S.BePraisedLabelWrapper>
            <S.BePraisedAvatarContainer>
              {checkedUsers.map((user) => (
                <S.BePraisedAvatarWrapper key={user._id}>
                  <Avatar
                    size={30}
                    avatarName={user.fullName}
                    src={user.image}
                    ellipsis
                  />
                </S.BePraisedAvatarWrapper>
              ))}
            </S.BePraisedAvatarContainer>
          </S.BePraisedContainer>
          <Divider />
          <ReasonContainer reason={reason} setReason={setReason} />
          <ImageUploadContainer imageSrc={imageSrc} setImageSrc={setImageSrc} />
          <LabelList labelItems={labelItems} setLabelItems={setLabelItems} />
          <Button
            version="yellowOutlined"
            width="100%"
            onClick={() => handleCreatePost(TTaBong)}
          >
            따봉!
          </Button>
          <Button
            version="yellow"
            width="100%"
            onClick={() => handleCreatePost(BigTTaBong)}
          >
            빅따봉!
          </Button>
        </S.PraisePageContainer>
      </BaseCardContainer>
    </PageTemplate>
  );
};

export default TTaBongPage;
