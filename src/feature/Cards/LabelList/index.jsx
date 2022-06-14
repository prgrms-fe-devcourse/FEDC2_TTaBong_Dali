import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import Label from '../../../components/Label';

const LabelList = ({ labelTypes = [] }) => {
  return (
    <S.LabelContainer>
      {labelTypes.map((type, index) =>
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
  labelTypes: PropTypes.arrayOf(PropTypes.string),
};

export default LabelList;
