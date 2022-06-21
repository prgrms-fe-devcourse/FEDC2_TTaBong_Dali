import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Avatar from '../../../components/Avatar';
import Icon from '../../../components/Icon';
import * as S from './style';
import Badge from '../../../components/Badge';

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
      <Link to="/">
        <S.PlacedLogo />
      </Link>
      <Link to="/alarm">
        <S.IconWrapper>
          <Badge dot={isAlarm}>
            <Icon name="alarmLine" alt="알람 아이콘" />
          </Badge>
        </S.IconWrapper>
      </Link>
    </S.Header>
  );
};

Header.propTypes = {
  isScrollDown: PropTypes.bool,
};

export default Header;
