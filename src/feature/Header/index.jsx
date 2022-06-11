// import PropTypes from 'prop-types';
import Avatar from '../../components/Avatar';
import * as S from './style';

// 따봉왕, 코인왕 아바타 이미지 props로 받아야함
const Header = () => {
  return (
    <S.Header>
      <S.AvatarContainer>
        <S.TTaBongKingAvatarWrapper>
          <Avatar size={30} />
        </S.TTaBongKingAvatarWrapper>
        <S.CoinKingAvatarWrapper>
          <Avatar size={30} />
        </S.CoinKingAvatarWrapper>
      </S.AvatarContainer>
      <S.Logo>TTA BONG</S.Logo>
    </S.Header>
  );
};

// Header.propTypes = {};

export default Header;
