import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import Avatar from '../../../components/Avatar';

const AlarmItem = ({
  type = 'like',
  author = '나',
  authorId = '',
  commentContent = '',
  postId = '',
}) => {
  const navigator = useNavigate();

  const alarmTypes = {
    like: '맞따봉을 남겼습니다',
    comment: '댓글을 남겼습니다',
  };

  const onClickAvatar = () => {
    navigator(`/userProfile/${authorId}`);
  };

  const onClickAlarm = () => {
    navigator(`/cardDetail/${postId}`);
  };

  return (
    <S.AlarmItem>
      <Avatar onClick={onClickAvatar} size={42} />
      <S.AlarmContent onClick={onClickAlarm}>
        <S.AlarmTitle>
          <S.BoldAuthor>{author}</S.BoldAuthor> 님이 {alarmTypes[type]}
        </S.AlarmTitle>
        <S.AlarmComment>{commentContent && commentContent}</S.AlarmComment>
      </S.AlarmContent>
    </S.AlarmItem>
  );
};

AlarmItem.propTypes = {};

export default AlarmItem;
