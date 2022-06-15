import PropTypes from 'prop-types';
import * as S from './style';
import Avatar from '../Avatar';

const UserInfoItem = ({
  rank,
  avatarImg,
  userName,
  coin = null,
  TTaBong = null,
}) => {
  return (
    <S.UserInfoItemContanier>
      <S.RankerContainer>
        {rank && (
          <S.RankContainer rank={rank}>
            <S.Rank>{rank}</S.Rank>
          </S.RankContainer>
        )}
        <S.AvatarContainer>
          <Avatar src={avatarImg} size={40} />
        </S.AvatarContainer>
      </S.RankerContainer>
      <S.UserNameWrapper>{userName}</S.UserNameWrapper>
      <S.CountContainer>
        {coin && (
          <S.CountWrapper>
            <S.CountTitle>총 코인수</S.CountTitle>
            <S.CountSpan>{coin}</S.CountSpan>
          </S.CountWrapper>
        )}
        {TTaBong && (
          <S.CountWrapper>
            <S.CountTitle>총 따봉수</S.CountTitle>
            <S.CountSpan>{TTaBong}</S.CountSpan>
          </S.CountWrapper>
        )}
      </S.CountContainer>
    </S.UserInfoItemContanier>
  );
};

UserInfoItem.propTypes = {
  rank: PropTypes.number,
  avatarImg: PropTypes.string,
  userName: PropTypes.string.isRequired,
  coin: PropTypes.number,
  TTaBong: PropTypes.number,
  // coinCount와 TTaBong 둘 중 하나 이상은 필수
};

export default UserInfoItem;
