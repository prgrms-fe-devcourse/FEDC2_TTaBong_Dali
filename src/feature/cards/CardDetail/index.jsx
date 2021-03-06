import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import Card from '../Card';
import TTaBongerAndTTaBonged from '../TTaBongerAndTTaBonged';
import LabelList from '../LabelList';
import Image from '../../../components/Image';
import Divider from '../../../components/Divider';
import CommentList from '../CommentList';
import InputForm from '../../../components/InputForm';
import Icon from '../../../components/Icon';

const CardDetail = ({
  author,
  comments = [],
  img,
  receiver,
  isLike = false,
  likeCount = 0,
  PraiseReason = '',
  labelItems = [],
  onChangeInput,
  onSubmitInput,
  onClickLike,
  type,
}) => {
  console.log(receiver);
  return (
    <Card width={342} height={624}>
      <TTaBongerAndTTaBonged author={author} receiver={receiver} type={type} />
      <S.MainSection>
        <S.ContentContainer>
          <S.PraiseContainer>
            <S.PraiseReasonWrapper>칭찬사유</S.PraiseReasonWrapper>
            <S.PraiseContentWrapper>{PraiseReason}</S.PraiseContentWrapper>
          </S.PraiseContainer>
          {img && <Image src={img} width={136} height={136} alt="그림" />}
        </S.ContentContainer>
        <S.InfoContainer>
          <LabelList labelItems={labelItems} />
          <S.LikeContainer>
            <S.LikeEventWrapper onClick={onClickLike}>
              {!isLike ? (
                <Icon name="likesLine" alt="공감" size={14} />
              ) : (
                <S.StyleIconWrapper>
                  <Icon name="TB" alt="공감" size={14} />
                </S.StyleIconWrapper>
              )}
            </S.LikeEventWrapper>
            <S.CountSpan>맞 따봉 {likeCount}개</S.CountSpan>
          </S.LikeContainer>
        </S.InfoContainer>
        <Divider size={320} />
        <InputForm
          version="comment"
          onChange={onChangeInput}
          onSubmit={onSubmitInput}
        />
        <CommentList height={200} comments={comments} />
      </S.MainSection>
    </Card>
  );
};

CardDetail.propTypes = {
  comments: PropTypes.array,
  img: PropTypes.string,
  likeCount: PropTypes.number,
  PraiseReason: PropTypes.string.isRequired,
  labelItems: PropTypes.string.isRequired,
  onClickLike: PropTypes.func,
};

export default CardDetail;
