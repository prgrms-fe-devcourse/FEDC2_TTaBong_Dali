import * as S from './style';
import PageTemplate from '../../feature/pageTemplate/PageTemplate';
import { putPassword } from '../../apis/settings';

const ProfileEdigPage = () => {
  const defaultValue = {
    userName: '이우제',
  };

  return (
    <S.ProfileEditPageWrapper>
      <PageTemplate>
        <S.PlacedProfileEditForm
          onSubmit={putPassword}
          defaultValue={defaultValue}
        />
      </PageTemplate>
    </S.ProfileEditPageWrapper>
  );
};

export default ProfileEdigPage;
