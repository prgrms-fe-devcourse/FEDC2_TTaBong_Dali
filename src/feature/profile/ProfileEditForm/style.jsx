import styled from '@emotion/styled';
import InputForm from '../../../components/InputForm';
import BaseCardContainer from '../../../components/BaseCardContainer';
import Button from '../../../components/Button';

export const ProfileEditFormContainer = styled(BaseCardContainer)``;

export const ProfileEditForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ProfileEditLabel = styled.div`
  color: ${({ theme }) => theme.colors.skyblue[0]};
  font-weight: 700;
`;

export const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 21px;
`;

export const EditInput = styled(InputForm)`
  margin-bottom: 24px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ProfileEditButton = styled(Button)`
  margin-top: 140px;
  font-weight: 700;
`;
