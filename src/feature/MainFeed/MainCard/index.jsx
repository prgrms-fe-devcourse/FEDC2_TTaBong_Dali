import PropTypes from 'prop-types';
import * as S from './style';
import TB from '../../../assets/ttabong_card.svg';
import likes from '../../../assets/sympathy_ttabong.svg';
import Label from '../../../components/Label';
import Avatar from '../../../components/Avatar';

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
      <S.StyledSection>
        <Avatar avatarName={authorName} />
        <img src={TB} alt="따봉" width="36px" height="36px" />
        <Avatar avatarName={receiverName} />
      </S.StyledSection>
      <S.DivisionLine />
      <S.StyledSection>
        <S.PraiseContainer>
          <h3>칭찬사유</h3>
          <h5>{likeReason}</h5>
        </S.PraiseContainer>
        <div>
          <S.LabelContainer>
            {labelTypes.map((type) => (
              <Label type={type} />
            ))}
          </S.LabelContainer>
          <S.LikeContainer>
            <S.UpdateContainer>
              <S.CountSpan>댓글 수 {commenCount}개</S.CountSpan>
              <S.CountSpan>맞 따봉 {likeCount}개</S.CountSpan>
            </S.UpdateContainer>
            <img src={likes} alt="따봉" width="36px" height="36px" />
          </S.LikeContainer>
        </div>
      </S.StyledSection>
    </S.BackgroundCard>
  );
};

MainCard.propTypes = {
  labelTypes: PropTypes.array.isRequired,
  authorName: PropTypes.string.isRequired,
  receiverName: PropTypes.string.isRequired,
  commenCount: PropTypes.number.isRequired,
  likeCount: PropTypes.number.isRequired,
};

export default MainCard;
