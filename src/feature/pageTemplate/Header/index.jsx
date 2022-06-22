import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Avatar from '../../../components/Avatar';
import Icon from '../../../components/Icon';
import * as S from './style';
import Badge from '../../../components/Badge';
import AvatarBorder from '../../../components/AvatarBorder';

const Header = ({ isScrollDown = false, isAlarm = false }) => {
  return (
    <S.Header isScrollDown={isScrollDown}>
      <S.AvatarContainer>
        <AvatarBorder king="TTaBong">
          <Avatar size={30} />
        </AvatarBorder>
        <AvatarBorder king="coin">
          <Avatar size={30} />
        </AvatarBorder>
      </S.AvatarContainer>
      <Link to="/">
        <S.PlacedLogo />
      </Link>
      <Link to="/alarm">
        <S.IconWrapper>
          <Badge dot={isAlarm}>
            <Icon name="alarmLine" alt="알람 아이콘" size={18} />
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
