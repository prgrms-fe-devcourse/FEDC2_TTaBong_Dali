import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import Divider from '../../../components/Divider';
import AlarmItem from '../AlarmItem';

const AlarmSection = ({ title = '읽음', alarms = [] }) => {
  return (
    <S.AlarmSection>
      <S.Title>{title}</S.Title>
      <Divider />
      <S.AlarmList>
        {alarms.map((alarm) => {
          let type;
          if (Object.keys(alarm).includes('comment')) type = 'comment';
          else type = 'like';
          return (
            <AlarmItem
              key={alarm._id}
              type={type}
              author={alarm.author}
              postId={alarm.post}
              commentContent={alarm.comment.comment}
            />
          );
        })}
      </S.AlarmList>
    </S.AlarmSection>
  );
};

AlarmSection.propTypes = {
  title: PropTypes.string,
  alarms: PropTypes.arrayOf(PropTypes.object),
};

export default AlarmSection;
