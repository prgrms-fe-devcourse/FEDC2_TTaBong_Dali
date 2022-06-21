import styled from '@emotion/styled';
import InputForm from '../../components/InputForm';
import { getPxToRem } from '../../utils/getPxToRem';

export const SearchPageContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

export const ContentWrapper = styled.div`
  width: 100%;
`;

export const InputWrapper = styled(ContentWrapper)`
  height: ${getPxToRem(60)};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchInputForm = styled(InputForm)`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const TabWrapper = styled(ContentWrapper)`
  height: ${getPxToRem(45)};
`;
export const BaseCardWrapper = styled(ContentWrapper)`
  height: ${getPxToRem(450)};
`;

export const ItemWrapper = styled.div`
  width: 100%;
  margin-bottom: ${getPxToRem(18)};

  display: flex;
  justify-content: center;
`;
