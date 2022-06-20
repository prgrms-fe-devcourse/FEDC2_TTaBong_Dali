import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import Icon from '../../../components/Icon';

const CheckIcon = ({ checked }) => {
  const [isChecked, setIsChecked] = checked
    ? [checked, () => {}]
    : useState(false);

  return (
    <S.CheckIconWrapper onClick={() => setIsChecked(!isChecked)}>
      {isChecked ? (
        <S.CheckedBox>
          <Icon name="checkWhite" alt="checked-icon" size="100%" />
        </S.CheckedBox>
      ) : (
        <S.UncheckedBox />
      )}
    </S.CheckIconWrapper>
  );
};

CheckIcon.propTypes = {};

export default CheckIcon;
