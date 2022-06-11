import styled from '@emotion/styled';

const toRem = (px) => {
  return `${(px / 16).toFixed(2)}rem`;
};

export const BottomBarContainer = styled.div`
  width: 95vw;
  min-width: ${toRem(354)};
  height: ${toRem(71)};
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 2rem;

  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: ${toRem(15)};
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 50vw;
  margin: 0 ${toRem(24)};
`;

export const TTaBongContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: ${toRem(66)};
`;

export const TTaBongOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  top: ${toRem(-40)};

  width: ${toRem(78)};
  height: ${toRem(78)};
  border-radius: ${toRem(39)};
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: inset 0 -4px 4px rgba(0, 0, 0, 0.1);
`;

export const TTaBongInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${toRem(66)};
  height: ${toRem(66)};

  background-color: ${(props) => props.theme.colors.yellow[0]};
  border-radius: ${toRem(33)};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

//따봉 아이콘은 따로 스타일 설정 할 필요없이 바로 넣으면 되서 styled화 하진 않았습니다. 혹시 필요하다고 생각되면 말씀 해 주세요!
