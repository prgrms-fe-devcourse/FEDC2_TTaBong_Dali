import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import TB from '../../../assets/ttabong_card.svg';
import likesLine from '../../../assets/sympathy_ttabong.svg';
import Label from '../../../components/Label';
import Avatar from '../../../components/Avatar';
import TTaBongerAndTTaBonged from '../TTaBongerAndTTaBonged';
import LabelList from '../LabelList';
import Divider from '../../../components/Divider';
import BaseCardContainer from '../../../components/BaseCardContainer';

// 아바타2개 컨테이너 분리
// 디비전 라인 컴포넌트 분리 -> base 로 분리
// Card

const MainCard = ({ post }) => {
  const {
    _id: postId,
    image,
    imgaePublicId,
    title,
    channel,
    author,
    likes,
    comments,
    createdAt,
    updatedAt,
  } = post;

  const { type, receiver, content, labels } = JSON.parse(title.trim());
  const navigate = useNavigate();
  const handleClick = () => navigate(`/cardDetail/${author._id}`);

  // label이 없는경우를 대비해 default는 빈배열로 일단 처리
  return (
    <BaseCardContainer width={358} height={204}>
      <S.MainCardContainer onClick={handleClick}>
        <TTaBongerAndTTaBonged
          authorName={author.fullName}
          receiverName={receiver.fullName}
        />
        <Divider size={300} />
        <S.SecondSection>
          <S.PraiseContainer>
            <S.PraiseReason>칭찬사유</S.PraiseReason>
            <S.PraiseContent>{content}</S.PraiseContent>
          </S.PraiseContainer>
          <S.InfoContainer>
            <LabelList labelItems={labels} />
            <S.LikeContainer>
              <S.CountNumContainer>
                <S.CountSpan>댓글 수 {comments.length}개</S.CountSpan>
                <S.CountSpan>맞 따봉 {likes.length}개</S.CountSpan>
              </S.CountNumContainer>
              <img src={likesLine} alt="공감" width="28px" height="28px" />
            </S.LikeContainer>
          </S.InfoContainer>
        </S.SecondSection>
      </S.MainCardContainer>
    </BaseCardContainer>
  );
};

MainCard.propTypes = {};

export default MainCard;
