import styled from '@emotion/styled';
import Avatar from '../Avatar';

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ version }) =>
    version === 'comment' ? '210px' : version === 'edit' ? '256px' : '307px'};
  border-bottom: 2px solid
    ${({ invalid, theme }) =>
      invalid ? theme.colors.red : theme.colors.gray[0]};
  margin: ${({ version }) => version === 'edit' && '0 auto'};
`;

export const Input = styled.input`
  width: ${({ version }) => (version === 'comment' ? '95%' : '90%')};
  outline-style: none;
  border: 0;
  outline: 0;
  padding-bottom: 4px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray[0]};
  }
`;

export const SearchContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 69px;
  padding: 0 40px;
  border: 0;
  border-radius: 34px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 24px;
`;

export const CommentContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 304px;
  height: 39px;
  padding: 13px 0;
  border: 0;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 292px;
  height: 80px;
  border: 0;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PlacedAvatar = styled(Avatar)`
  padding-right: 8px;
`;

export const ButtonBox = styled.div`
  padding-left: 8px;
`;

export const SearchButton = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const CommentButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 12px;
  font-size: 12px;
  font-weight: bold;
  border: none;
  outline: none;
  background-color: inherit;
  color: ${({ theme }) => theme.colors.skyblue[0]};
  cursor: pointer;
`;

export const RemoveButton = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const InputTypeLabel = styled.label`
  height: 22px;
  font-size: 12px;
  font-weight: bold;
  padding-left: ${({ version }) => version === 'edit' && '16px'};
`;

export const Errors = styled.div`
  margin-top: ${({ version }) => version === 'auth' && '4px'};
  //margin-top: 4px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.red};
  padding-left: ${({ version }) => version === 'edit' && '16px'};
`;
