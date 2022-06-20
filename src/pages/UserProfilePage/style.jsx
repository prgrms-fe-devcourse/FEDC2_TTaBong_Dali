import styled from '@emotion/styled';

export const ProfileInfoContainer = styled.div`
  width: 100%;
  height: 9.5rem;
  font-family: 'Noto Sans KR', sans-serif;
  position: relative;
  display: flex;
  justify-content: space-between;

  .divider {
    position: absolute;
    bottom: 0rem;
    width: 100%;
    background-color: ${(props) => props.theme.colors.skyblue[0]};
  }
  .logoutIcon {
    position: absolute;
    top: 0.3rem;
    right: 0;
  }
`;

export const InfoLeftContainer = styled.div`
  width: 30%;
  min-width: 7rem;
`;

export const InfoName = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const InfoId = styled.div`
  font-weight: 700;
  color: ${(props) => props.theme.colors.darkgray[2]};
  position: relative;
  top: -0.5rem;
`;

export const InfoRightContainer = styled.div`
  width: 70%;
  flex-shrink: 1;
  padding-bottom: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .button {
    width: 100%;
    height: 2rem;
    border: 1.5px solid;
    font-size: 1rem;
    line-height: 1rem;
  }
`;

export const CountInfoWrapper = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.darkgray[2]};

  display: flex;
  justify-content: space-evenly;
`;

export const PraiseCountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .num {
    color: ${(props) => props.theme.colors.black};
    font-weight: 700;
  }
`;
export const CoinCountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .num {
    color: ${(props) => props.theme.colors.yellow[0]};
    font-weight: 700;
  }
`;

export const TapWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const ProfileCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  gap: 1rem;
`;
