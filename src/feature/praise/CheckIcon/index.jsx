import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import Icon from '../../../components/Icon';

const CheckIcon = ({ onClick = () => {} }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
    onClick();
  };

  return (
    <S.CheckIconWrapper onClick={handleClick}>
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

CheckIcon.propTypes = {
  onClick: PropTypes.func,
};

export default CheckIcon;
