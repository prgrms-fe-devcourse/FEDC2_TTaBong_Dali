import styled from '@emotion/styled';
import theme from '../../commons/style/themes';
import BaseCardContainer from '../../components/BaseCardContainer';

export const PraisePageContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const BePraisedLabelWrapper = styled.div`
  width: 72px;
  height: 18px;

  font-weight: 500;
  font-size: 13px;
  color: ${theme.colors.darkgray[2]};
`;

export const BePraisedContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BePraised = styled(BaseCardContainer)`
  box-shadow: none;
`;
export const PraiseReasonContainer = styled.div``;
export const ImageUploaderContainer = styled.div``;
export const LabelListContainer = styled.div``;
export const PraiseButtonContainer = styled.div`
  width: 100%;
`;
