import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { getPxToRem } from '../../utils/getPxToRem';

export const UserInfoItemContanier = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: ${getPxToRem(290)};
  min-height: ${getPxToRem(56)};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 40px 17px 17px 40px;
  cursor: pointer;
`;

export const RankerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 8px;
  gap: 8px;
`;

const SilverRankStyle = ({ theme }) => css`
  background: linear-gradient(
    to bottom right,
    ${theme.colors.silver[0]},
    ${theme.colors.silver[1]}
  );
`;

const BronzeRankStyle = ({ theme }) => css`
  background: linear-gradient(
    to bottom right,
    ${theme.colors.bronze[0]},
    ${theme.colors.bronze[1]}
  );
`;

const DefaultRankStyle = ({ theme }) => css`
  background: ${theme.colors.skyblue[0]};
`;

export const RankContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  border-radius: 50%;
  ${({ rank }) => {
    switch (rank) {
      case 2:
        return SilverRankStyle;
      case 3:
        return BronzeRankStyle;
      default:
        return DefaultRankStyle;
    }
  }};
`;

export const Rank = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 36px;
  margin: 2px;

  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  border: 2px solid;
  font-weight: 600;
  font-size: 24px;
`;

export const AvatarContainer = styled.div`
  display: flex;
`;

export const UserNameWrapper = styled.div`
  max-width: 120px;
  padding-top: 0.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

export const CountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 8px;
  margin-right: 8px;
`;

export const CountWrapper = styled.dl`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CountTitle = styled.dt`
  color: ${({ theme }) => theme.colors.darkgray[1]};
  font-size: 8px;
`;

export const CountSpan = styled.dd`
  font-size: 20px;
  font-weight: 700;
`;
