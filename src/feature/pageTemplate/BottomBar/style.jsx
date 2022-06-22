import styled from '@emotion/styled';

const toRem = (px) => {
  return `${(px / 16).toFixed(2)}rem`;
};

export const BottomBarContainer = styled.div`
  width: 90%;
  min-width: ${toRem(354)};
  height: ${toRem(71)};
  margin-top: 3rem;
  margin-bottom: 2rem;

  display: flex;
  justify-content: space-between;
  flex-shrink: 0;

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

export function TTaBongContainerBox({ children }) {
  return (
    <TTaBongContainer>
      <TTaBongOuterContainer>
        <TTaBongInnerContainer>{children}</TTaBongInnerContainer>
      </TTaBongOuterContainer>
    </TTaBongContainer>
  );
}
