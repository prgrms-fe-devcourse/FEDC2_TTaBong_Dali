import PropTypes from 'prop-types';
import Avatar from '../../../components/Avatar';
import * as S from './style';

const RankFirstInfo = ({
  avatarImg,
  userName,
  coinCount = -1,
  TTaBongCount = -1,
}) => {
  return (
    <S.RankFirstContainer>
      <S.RankFirstWrapper>현재 1위</S.RankFirstWrapper>
      <S.RankFirstInfoWrapper>
        <S.AvatarBox>
          {/* 왕관 이미지? */}
          <Avatar src={avatarImg} />
        </S.AvatarBox>
        <S.InfoBox>
          <S.UserNameWrapper>{userName}</S.UserNameWrapper>
          {TTaBongCount >= 0 && (
            <S.TotalCount>
              <S.CountTitle>총 따봉수</S.CountTitle>
              <S.CountNum>{TTaBongCount}</S.CountNum>
            </S.TotalCount>
          )}
          {coinCount >= 0 && (
            <S.TotalCount>
              <S.CountTitle>총 코인수</S.CountTitle>
              <S.CountNum>{coinCount}</S.CountNum>
            </S.TotalCount>
          )}
        </S.InfoBox>
      </S.RankFirstInfoWrapper>
    </S.RankFirstContainer>
  );
};

RankFirstInfo.propTypes = {
  avatarImg: PropTypes.string,
  userName: PropTypes.string,
  coinCount: PropTypes.number,
  TTaBongCount: PropTypes.number,
};

export default RankFirstInfo;
