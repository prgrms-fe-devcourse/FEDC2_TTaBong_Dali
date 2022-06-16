// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import Avatar from '../../components/Avatar';
import Icon from '../../components/Icon';
import * as S from './style';
import iconAlarm from '../../assets/icon_alarm_line.svg';
import Badge from '../../components/Badge';

// 따봉왕, 코인왕 아바타 이미지 props로 받아야함

const Header = ({ isScrollDown = false, isAlarm = false }) => {
  return (
    <S.Header isScrollDown={isScrollDown}>
      <S.AvatarContainer>
        <S.TTaBongKingAvatarWrapper>
          <Avatar size={30} />
        </S.TTaBongKingAvatarWrapper>
        <S.CoinKingAvatarWrapper>
          <Avatar size={30} />
        </S.CoinKingAvatarWrapper>
      </S.AvatarContainer>
      <S.Logo>TTA BONG</S.Logo>
      <S.IconWrapper>
        <Badge dot={isAlarm}>
          <Icon name="alarmIcon" alt="알람 아이콘" />
        </Badge>
      </S.IconWrapper>
    </S.Header>
  );
};

Header.propTypes = {
  isScrollDown: PropTypes.bool,
};

export default Header;
