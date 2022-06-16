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

const CardDetail = ({
  authorName = '',
  receiverName = '',
  comments = [],
  img = '',
  likeCount = 0,
  PraiseReason = '',
  labelItems = [],
}) => {
  return (
    <Card width={342} height={614}>
      <TTaBongerAndTTaBonged
        authorName={authorName}
        receiverName={receiverName}
      />
      <S.mainSection>
        <S.contentContainer>
          <S.PraiseContainer>
            <S.PraiseReason>칭찬사유</S.PraiseReason>
            <S.PraiseContent>{PraiseReason}</S.PraiseContent>
          </S.PraiseContainer>
          {img && <Image src={img} width={136} height={136} />}
        </S.contentContainer>
        <S.InfoContainer>
          <LabelList labelItems={labelItems} />
          <S.LikeContainer>
            <img src={likes} alt="공감" width="28px" height="28px" />
            <S.CountSpan>맞 따봉 {likeCount}개</S.CountSpan>
          </S.LikeContainer>
        </S.InfoContainer>
        <Divider size={320} />
        <CommentList comments={comments} />
      </S.mainSection>
    </Card>
  );
};

CardDetail.propTypes = {
  authorName: PropTypes.string.isRequired,
  receiverName: PropTypes.string.isRequired,
  comments: PropTypes.array,
  img: PropTypes.string,
  likeCount: PropTypes.string,
  PraiseReason: PropTypes.string.isRequired,
  labelItems: PropTypes.string.isRequired,
};

export default CardDetail;
