import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import Card from '../Card';
import TTaBongerAndTTaBonged from '../TTaBongerAndTTaBonged';
import LabelList from '../LabelList';
import Image from '../../../components/Image';
import likes from '../../../assets/sympathy_ttabong.svg';
import Divider from '../../../components/Divider';
import CommentList from '../CommentList';
import InputForm from '../../../components/InputForm';

const CardDetail = ({
  authorName = '',
  authorId = '',
  authorImg,
  receiverName = '',
  receiverId = '',
  receiverImg,
  comments = [],
  img = '',
  likeCount = 0,
  PraiseReason = '',
  labelItems = [],
  onChangeInput,
  onSubmitInput,
}) => {
  return (
    <Card width={342} height={624}>
      <TTaBongerAndTTaBonged
        authorName={authorName}
        authorId={authorId}
        receiverName={receiverName}
        receiverId={receiverId}
      />
      <S.MainSection>
        <S.ContentContainer>
          <S.PraiseContainer>
            <S.PraiseReasonWrapper>칭찬사유</S.PraiseReasonWrapper>
            <S.PraiseContentWrapper>{PraiseReason}</S.PraiseContentWrapper>
          </S.PraiseContainer>
          {img && <Image src={img} width={136} height={136} />}
        </S.ContentContainer>
        <S.InfoContainer>
          <LabelList labelItems={labelItems} />
          <S.LikeContainer>
            <img src={likes} alt="공감" width="28px" height="28px" />
            <S.CountSpan>맞 따봉 {likeCount}개</S.CountSpan>
          </S.LikeContainer>
        </S.InfoContainer>
        <Divider size={320} />
        <CommentList height={170} comments={comments} />
        <InputForm
          version="comment"
          onChange={onChangeInput}
          onSubmit={onSubmitInput}
        />
      </S.MainSection>
    </Card>
  );
};

CardDetail.propTypes = {
  authorName: PropTypes.string.isRequired,
  authorId: PropTypes.string.isRequired,
  receiverName: PropTypes.string.isRequired,
  receiverId: PropTypes.string.isRequired,
  comments: PropTypes.array,
  img: PropTypes.string,
  likeCount: PropTypes.string,
  PraiseReason: PropTypes.string.isRequired,
  labelItems: PropTypes.string.isRequired,
};

export default CardDetail;
