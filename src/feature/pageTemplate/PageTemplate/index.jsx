import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import BottomBar from '../BottomBar';
import Header from '../Header';

const PageTemplate = ({ children, page }) => {
  return (
    <S.PageTemplate>
      <Header />
      <S.ContentSection>{children}</S.ContentSection>
      <BottomBar page={page} />
    </S.PageTemplate>
  );
};

PageTemplate.propTypes = {
  page: PropTypes.string.isRequired,
};

export default PageTemplate;
