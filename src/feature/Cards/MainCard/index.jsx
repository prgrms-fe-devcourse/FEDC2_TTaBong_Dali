import PropTypes from 'prop-types';
import * as S from './style';
import TB from '../../../assets/ttabong_card.svg';
import likes from '../../../assets/sympathy_ttabong.svg';
import Label from '../../../components/Label';
import Avatar from '../../../components/Avatar';
import TTaBongerAndTTaBonged from '../TTaBongerAndTTaBonged';

// 아바타2개 컨테이너 분리
// 디비전 라인 컴포넌트 분리 -> base 로 분리
// Card

const MainCard = ({
  authorName = '이름',
  receiverName = '이름',
  commenCount = 0,
  likeCount = 0,
  likeReason = '',
  labelTypes = [],
}) => {
  // label이 없는경우를 대비해 default는 빈배열로 일단 처리
  return (
    <S.BackgroundCard>
      <TTaBongerAndTTaBonged
        authorName={authorName}
        receiverName={receiverName}
      />
      <S.DivisionLine />
      <S.SecondSection>
        <S.PraiseContainer>
          <S.PraiseReason>칭찬사유</S.PraiseReason>
          <S.PraiseContent>{likeReason}</S.PraiseContent>
        </S.PraiseContainer>
        <S.InfoContainer>
          <S.LabelContainer>
            {labelTypes.map((type) => (
              <Label type={type} />
            ))}
          </S.LabelContainer>
          <S.LikeContainer>
            <S.CountNumContainer>
              <S.CountSpan>댓글 수 {commenCount}개</S.CountSpan>
              <S.CountSpan>맞 따봉 {likeCount}개</S.CountSpan>
            </S.CountNumContainer>
            <img src={likes} alt="공감" width="28px" height="28px" />
          </S.LikeContainer>
        </S.InfoContainer>
      </S.SecondSection>
    </S.BackgroundCard>
  );
};

MainCard.propTypes = {
  labelTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  authorName: PropTypes.string.isRequired,
  receiverName: PropTypes.string.isRequired,
  commenCount: PropTypes.number.isRequired,
  likeCount: PropTypes.number.isRequired,
};

export default MainCard;
