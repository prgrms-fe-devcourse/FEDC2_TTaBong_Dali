import { useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';
import * as S from './style';
import Label from '../../../components/Label';

const LabelList = () => {
  const [praise, setPraise] = useState('');
  const [moved, setMoved] = useState('');
  const [warm, setWarm] = useState('');

  const onClickLabel = (type) => {
    switch (type) {
      case 'praise':
        return praise === '' ? setPraise('praise') : setPraise('');
      case 'moved':
        return moved === '' ? setMoved('moved') : setMoved('');
      case 'warm':
        return warm === '' ? setWarm('warm') : setWarm('');
      default:
        return null;
    }
  };

  return (
    <S.StyledLabelList>
      <S.LabelTitle>라벨</S.LabelTitle>
      <S.LabelContent>
        <Label onClick={() => onClickLabel('praise')} type={praise}>
          칭찬
        </Label>
        <Label onClick={() => onClickLabel('moved')} type={moved}>
          감동
        </Label>
        <Label onClick={() => onClickLabel('warm')} type={warm}>
          따뜻
        </Label>
      </S.LabelContent>
    </S.StyledLabelList>
  );
};

export default LabelList;
