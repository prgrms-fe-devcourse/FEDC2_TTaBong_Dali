import PropTypes from 'prop-types';
import * as S from './style';
import defaultAvatar from '../../assets/avatar_default.svg';

// avatarName을 상위 컴포넌트에서 안넣어주면 이름 안보이게끔
const AvatarBorder = ({ king, children }) => {
  return <S.KingWrapper king={king}>{children}</S.KingWrapper>;
};

AvatarBorder.propTypes = {
  king: PropTypes.string,
};

export default AvatarBorder;
