import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import Avatar from '../../../components/Avatar';
import { getNotificationsSeen } from '../../../apis';
import { useAuthContext } from '../../../contexts/UserProvider';

const AlarmItem = ({ type = 'like', alarm }) => {
  const navigator = useNavigate();
  const { authUser } = useAuthContext();

  const alarmTypes = {
    like: '맞따봉을 남겼습니다',
    comment: '댓글을 남겼습니다.',
  };

  const onClickAvatar = () => {
    navigator(`/userProfile/${alarm.author._id}`);
  };

  const onClickAlarm = async () => {
    getNotificationsSeen(authUser.token); // jwt 토큰 넣어야함

    navigator(`/cardDetail/${alarm.post}`);
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
};

export default AlarmItem;
