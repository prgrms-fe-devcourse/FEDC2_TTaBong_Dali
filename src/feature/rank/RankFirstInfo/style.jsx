import styled from '@emotion/styled';

export const RankFirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 24px;
`;

export const RankFirstWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.yellow[0]};
  font-family: sans-serif;
  font-size: 25px;
  font-weight: 800;
`;

export const RankFirstInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 24px;
`;

export const AvatarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 16px;
`;

export const UserNameWrapper = styled.span`
  font-family: 'Noto Sans KR';
  font-weight: 700;
`;

export const TotalCount = styled.dl`
  display: flex;

  gap: 8px;
`;

export const CountTitle = styled.dt`
  font-size: 13px;
`;

export const CountNum = styled.dd`
  font-weight: 600;
`;
