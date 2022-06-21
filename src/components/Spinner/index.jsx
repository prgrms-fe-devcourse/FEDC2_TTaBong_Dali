import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import TB from '../../assets/ttabong_card.svg';

const Spinner = () => {
  return (
    <S.Spinner>
      <img src={TB} alt="따봉" width="60" height="60" />
    </S.Spinner>
  );
};

Spinner.propTypes = {};

export default Spinner;
