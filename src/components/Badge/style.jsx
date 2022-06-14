import styled from '@emotion/styled';

export const BadgeContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const Super = styled.sup`
  position: absolute;
  top: 0;
  right: 0;
  display: inline-flex;
  align-items: center;
  height: 20px;
  padding: 0 8px;
  font-size: 12px;
  color: white;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.red};
  transform: translate(-30%, 20%);

  &.dot {
    padding: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
`;
