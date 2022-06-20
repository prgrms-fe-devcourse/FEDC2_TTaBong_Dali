import { useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';
import * as S from './style';
import Label from '../../../components/Label';

const LabelList = ({ labelItems, setLabelItems }) => {
  const onClickLabel = (type) => {
    setLabelItems({ ...labelItems, [type]: labelItems[type] ? '' : type });
  };

  return (
    <S.StyledLabelList>
      <S.LabelTitle>라벨</S.LabelTitle>
      <S.LabelContent>
        <Label onClick={() => onClickLabel('praise')} type={labelItems.praise}>
          칭찬
        </Label>
        <Label onClick={() => onClickLabel('moved')} type={labelItems.moved}>
          감동
        </Label>
        <Label onClick={() => onClickLabel('warm')} type={labelItems.warm}>
          따뜻
        </Label>
      </S.LabelContent>
    </S.StyledLabelList>
  );
};

export default LabelList;
