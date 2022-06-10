import PropTypes from 'prop-types';
import * as S from './style';
import TB from '../../../assets/ttabong_card.svg';
import likes from '../../../assets/sympathy_ttabong.svg';
import Label from '../../../components/Label';
import Avatar from '../../../components/Avatar';

const MainCard = ({
  authorName,
  receiverName,
  commenCount,
  likeCount,
  likeReason,
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
          <div style={{ display: 'flex' }}>
            <div>
              <div>댓글 수 {commenCount}개</div>
              <div>맞 따봉 {likeCount}개</div>
            </div>
            <div>
              <img src={likes} alt="따봉" width="36px" height="36px" />
            </div>
          </div>
        </div>
      </S.StyledSection>
    </S.BackgroundCard>
  );
};

MainCard.propTypes = {
  labelTypes: PropTypes.array.isRequired,
};

export default MainCard;
