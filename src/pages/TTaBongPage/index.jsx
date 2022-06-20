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

  return (
    <PageTemplate>
      <TTaBongModal
        checkedUsers={checkedUsers}
        setCheckedUsers={setCheckedUsers}
        modalProps={modalProps}
      />
      <S.PraisePageContainer>
        <S.BePraisedContainer>
          <S.BePraisedLabelWrapper>칭찬 대상자</S.BePraisedLabelWrapper>
          <S.BePraised
            width="100%"
            height={46}
            backgroundColor={theme.colors.yellow[1]}
            borderRadius="11px"
          >
            {checkedUsers.map((user) => (
              <Avatar avatarName={user.fullName} />
            ))}
          </S.BePraised>
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
          <Button version="yellow" width="100%">
            칭찬하기
          </Button>
        </S.PraiseButtonContainer>
      </S.PraisePageContainer>
    </PageTemplate>
  );
};

export default TTaBongPage;
