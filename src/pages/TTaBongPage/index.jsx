import React from 'react';
import PageTemplate from '../../feature/pageTemplate/PageTemplate';
import * as S from './style';

const TTaBongPage = () => {
  return (
    <PageTemplate>
      <S.PraisePageContainer>
        <S.BePraisedContainer>bePraised</S.BePraisedContainer>
        <S.PraiseReasonContainer>reason</S.PraiseReasonContainer>
        <S.ImageUploaderContainer>uploader</S.ImageUploaderContainer>
        <S.LabelListContainer>labels</S.LabelListContainer>
        <S.PraiseButtonContainer>button</S.PraiseButtonContainer>
      </S.PraisePageContainer>
    </PageTemplate>
  );
};

export default TTaBongPage;
