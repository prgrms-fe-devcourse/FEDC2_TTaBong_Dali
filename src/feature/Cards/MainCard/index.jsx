import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import TB from '../../../assets/ttabong_card.svg';
import likes from '../../../assets/sympathy_ttabong.svg';
import Label from '../../../components/Label';
import Avatar from '../../../components/Avatar';
import TTaBongerAndTTaBonged from '../TTaBongerAndTTaBonged';
import LabelList from '../LabelList';
import Divider from '../../../components/Divider';
import BaseCardContainer from '../../../components/BaseCardContainer';

// 아바타2개 컨테이너 분리
// 디비전 라인 컴포넌트 분리 -> base 로 분리
// Card

const MainCard = ({
  authorName = '이름',
  receiverName = '이름',
  commentCount = 0,
  likeCount = 0,
  likeReason = '',
  labelItems = [],
}) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/cardDetail/${authorName}`);

  // label이 없는경우를 대비해 default는 빈배열로 일단 처리
  return (
    <BaseCardContainer width={358} height={204}>
      <S.MainCardContainer onClick={handleClick}>
        <TTaBongerAndTTaBonged
          authorName={authorName}
          receiverName={receiverName}
        />
        <Divider size={300} />
        <S.SecondSection>
          <S.PraiseContainer>
            <S.PraiseReason>칭찬사유</S.PraiseReason>
            <S.PraiseContent>{likeReason}</S.PraiseContent>
          </S.PraiseContainer>
          <S.InfoContainer>
            <LabelList labelItems={labelItems} />
            <S.LikeContainer>
              <S.CountNumContainer>
                <S.CountSpan>댓글 수 {commentCount}개</S.CountSpan>
                <S.CountSpan>맞 따봉 {likeCount}개</S.CountSpan>
              </S.CountNumContainer>
              <img src={likes} alt="공감" width="28px" height="28px" />
            </S.LikeContainer>
          </S.InfoContainer>
        </S.SecondSection>
      </S.MainCardContainer>
    </BaseCardContainer>
  );
};

MainCard.propTypes = {
  labelItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  authorName: PropTypes.string.isRequired,
  receiverName: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
  likeCount: PropTypes.number.isRequired,
};

export default MainCard;
