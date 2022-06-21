import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import Avatar from '../../../components/Avatar';
import { getNotificationsSeen } from '../../../apis';

const AlarmItem = ({ type = 'like', alarm }) => {
  const navigator = useNavigate();

  const alarmTypes = {
    like: '맞따봉을 남겼습니다',
    comment: '댓글을 남겼습니다',
  };

  const onClickAvatar = () => {
    navigator(`/userProfile/${alarm.author._id}`);
  };

  const onClickAlarm = async () => {
    navigator(`/cardDetail/${alarm.post}`);
    getNotificationsSeen(''); // jwt 토큰 넣어야함
  };

  return (
    <S.AlarmItem>
      <Avatar onClick={onClickAvatar} size={42} />
      <S.AlarmContent onClick={onClickAlarm}>
        <S.AlarmTitle>
          <S.BoldAuthor>{alarm.author.fullName}</S.BoldAuthor> 님이
          {alarmTypes[type]}
        </S.AlarmTitle>
        <S.AlarmComment>
          {type === 'comment' && alarm.comment.comment}
        </S.AlarmComment>
      </S.AlarmContent>
    </S.AlarmItem>
  );
};

AlarmItem.propTypes = {
  type: PropTypes.string,
  author: PropTypes.object,
  commentContent: PropTypes.string,
  postId: PropTypes.string,
};

export default AlarmItem;
