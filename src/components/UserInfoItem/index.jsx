import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import Avatar from '../Avatar';
import CheckIcon from '../../feature/praise/CheckIcon';

const UserInfoItem = ({
  rank,
  avatarImg,
  userName,
  coinCount = -1,
  TTaBongCount = -1,
  useCheck,
}) => {
  const navigate = useNavigate();

  // 나중에 userId로 바꿀 예정
  const handleClick = () => navigate(`/userProfile/${userName}`);

  return (
    <S.UserInfoItemContanier onClick={handleClick}>
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
        {coinCount >= 0 && (
          <S.CountWrapper>
            <S.CountTitle>총 코인수</S.CountTitle>
            <S.CountSpan>{coinCount}</S.CountSpan>
          </S.CountWrapper>
        )}
        {TTaBongCount >= 0 && (
          <S.CountWrapper>
            <S.CountTitle>총 따봉수</S.CountTitle>
            <S.CountSpan>{TTaBongCount}</S.CountSpan>
          </S.CountWrapper>
        )}
        {useCheck && <CheckIcon />}
      </S.CountContainer>
    </S.UserInfoItemContanier>
  );
};

UserInfoItem.propTypes = {
  rank: PropTypes.number,
  avatarImg: PropTypes.string,
  userName: PropTypes.string.isRequired,
  coinCount: PropTypes.number,
  TTaBongCount: PropTypes.number,
  // coinCount와 TTaBongCount 둘 중 하나 이상은 필수
};

export default UserInfoItem;
