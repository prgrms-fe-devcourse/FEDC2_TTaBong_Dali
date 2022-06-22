import PropTypes from 'prop-types';
import * as S from './style';
import defaultAvatar from '../../assets/avatar_default.svg';

// avatarName을 상위 컴포넌트에서 안넣어주면 이름 안보이게끔
const Avatar = ({
  size = 70,
  src = defaultAvatar,
  avatarName = '',
  ...props
}) => {
  return (
    <S.AvatarWrapper {...props}>
      <S.AvatarImg
        block
        width={size}
        height={size}
        src={src}
        alt="프로필 사진"
      />
      {avatarName && <S.AvatarName {...props}>{avatarName}</S.AvatarName>}
    </S.AvatarWrapper>
  );
};

Avatar.propTypes = {
  size: PropTypes.number,
  src: PropTypes.string,
  avatarName: PropTypes.string,
};

export default Avatar;
