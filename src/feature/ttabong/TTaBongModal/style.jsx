import styled from '@emotion/styled';
import InputForm from '../../../components/InputForm';

export const SearchInputFormContainer = styled.div``;

export const UserInfoItemContainer = styled.div`
  width: 100%;

  margin-top: 19px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserInfoItemWrapper = styled.div`
  margin-bottom: 6px;
`;

export const SearchInputForm = styled(InputForm)`
  background-color: ${({ theme }) => theme.colors.white};
`;
