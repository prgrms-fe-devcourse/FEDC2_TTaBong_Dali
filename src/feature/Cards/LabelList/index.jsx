import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import Label from '../../../components/Label';

const LabelList = ({ labelItems = [] }) => {
  return (
    <S.LabelContainer>
      {labelItems.map((type, index) =>
        index === 0 ? (
          <Label type={type} />
        ) : (
          <S.LabelWrapper>
            <Label type={type} />
          </S.LabelWrapper>
        ),
      )}
    </S.LabelContainer>
  );
};

LabelList.propTypes = {
  labelItems: PropTypes.arrayOf(PropTypes.string),
};

export default LabelList;
