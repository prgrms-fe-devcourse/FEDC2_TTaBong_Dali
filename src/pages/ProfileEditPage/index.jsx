import { useNavigate } from 'react-router-dom';
import * as S from './style';
import PageTemplate from '../../feature/pageTemplate/PageTemplate';
import { putPassword } from '../../apis/settings';
import { PASSWORD_UPDATE_SUCCESS } from '../../commons/constants/string';

const ProfileEditPage = () => {
  const navigate = useNavigate();

  const handleChangePassword = async (token, password) => {
    const response = await putPassword(token, password);
    if (response === 'Password updated successfully.') {
      alert(PASSWORD_UPDATE_SUCCESS);
      navigate('/userProfile'); // myUserProfile로 해야할듯
    }
  };

  return (
    <S.ProfileEditPageWrapper>
      <PageTemplate>
        <S.PlacedProfileEditForm onSubmit={handleChangePassword} />
      </PageTemplate>
    </S.ProfileEditPageWrapper>
  );
};

export default ProfileEditPage;
