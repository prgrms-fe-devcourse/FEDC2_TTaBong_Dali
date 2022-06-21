import styled from '@emotion/styled';

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AvatarImg = styled.img`
  position: relative;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.gray[0]};
  background-image: 'cover';
  overflow: hidden;
  transition: opacity 0.2s ease-out;
`;

export const AvatarName = styled.div`
  padding-top: 8px;
  font-size: 14px;

  ${({ ellipsis }) =>
    ellipsis &&
    `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`;
