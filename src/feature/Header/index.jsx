// import PropTypes from 'prop-types';
import Avatar from '../../components/Avatar';
import Icon from '../../components/Icon';
import * as S from './style';
import iconAlarm from '../../assets/icon_alarm_line.svg';
// 따봉왕, 코인왕 아바타 이미지 props로 받아야함
const Header = ({
  TTaBongKing = null,
  CoinKing = null,
  scrollDown = false,
}) => {
  return (
    <S.Header scrollDown={scrollDown}>
      <S.AvatarContainer>
        {TTaBongKing && (
          <S.TTaBongKingAvatarWrapper>
            <Avatar size={30} />
          </S.TTaBongKingAvatarWrapper>
        )}
        {CoinKing && (
          <S.CoinKingAvatarWrapper>
            <Avatar size={30} />
          </S.CoinKingAvatarWrapper>
        )}
      </S.AvatarContainer>
      <S.Logo>TTA BONG</S.Logo>
      <S.IconWrapper>
        <Icon src={iconAlarm} />
      </S.IconWrapper>
    </S.Header>
  );
};

// Header.propTypes = {};

export default Header;
