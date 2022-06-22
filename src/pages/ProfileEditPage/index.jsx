/* eslint-disable guard-for-in */
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import PageTemplate from '../../feature/pageTemplate/PageTemplate';
import Toast from '../../components/Toast';
import { putPassword } from '../../apis/settings';
import { PROFILE_UPDATE_SUCCESS } from '../../commons/constants/string';
import { useAuthContext } from '../../contexts/UserProvider';
import { postProfileImg } from '../../apis';

const ProfileEditPage = () => {
  const navigate = useNavigate();
  const { authUser } = useAuthContext();

  const handleChangeProfile = async (token, password, profileImgSrc) => {
    const response = await putPassword(token, password);
    if (response === 'Password updated successfully.') {
      if (profileImgSrc) {
        const formData = new FormData();
        formData.append('image', profileImgSrc);
        formData.append('isCover', false);
        await postProfileImg(token, formData);
      }

      Toast.show(PROFILE_UPDATE_SUCCESS);
      navigate(`/userProfile/${authUser.userId}`);
    }
  };

  return (
    <S.ProfileEditPageWrapper>
      <PageTemplate>
        <S.PlacedProfileEditForm onSubmit={handleChangeProfile} />
      </PageTemplate>
    </S.ProfileEditPageWrapper>
  );
};

export default ProfileEditPage;
