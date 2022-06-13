import styled from '@emotion/styled';
// import { css } from '@emotion/react';
import Avatar from '../Avatar';

// invalid에 따라 다른처리 할 수도
// const outlinedInputStyle = ({ theme }) => css`
//   border-bottom: 2px solid ${theme.colors.gray[0]};
// `;

export const InputForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ type }) => (type === 'comment' ? '210px' : '256px')};
  border-bottom: 2px solid
    ${({ invalid, theme }) =>
      invalid ? theme.colors.red : theme.colors.gray[0]};
`;

export const Input = styled.input`
  width: ${({ type }) => (type === 'comment' ? '95%' : '85%')};
  outline-style: none;
  border: 0;
  outline: 0;
  padding-bottom: 3px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray[0]};
  }
`;

export const SearhContainer = styled.form`
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
  // font-size 추후 변경 필요
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

export const CommentButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 12px;
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.skyblue[0]};
  cursor: pointer;
`;

export const RemoveButton = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
