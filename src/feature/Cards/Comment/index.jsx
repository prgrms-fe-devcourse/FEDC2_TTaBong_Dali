import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import Avatar from '../../../components/Avatar';

const DATE_ONE_HOUR = 3600000;
const DATE_ONE_DAY = DATE_ONE_HOUR * 24;

const getDayString = (diffTime, createdTime) => {
  let dayString = '';
  if (diffTime < DATE_ONE_DAY) {
    const countHours = Math.floor(diffTime / DATE_ONE_HOUR);
    dayString += `${countHours} 시간`;
  } else {
    const date = new Date(createdTime);
    dayString += `${date.getMonth()}월 `;
    dayString += `${date.getDay()}일 `;
    dayString += `${date.getHours()}:${date.getMinutes()} `;
  }

  return dayString;
};

const Comment = ({ author, comment, createdTime }) => {
  const diffTime = Date.parse(new Date()) - Date.parse(createdTime);
  const dayString = getDayString(diffTime, createdTime);

  return (
    <S.CommentContainer>
      <Avatar size={30} src={author.image || undefined} />
      <S.UserInfoContainer>
        <S.UserName>{author.fullname}</S.UserName>
        <S.Time>{dayString}</S.Time>
      </S.UserInfoContainer>
      <S.Comment>{comment}</S.Comment>
    </S.CommentContainer>
  );
};

Comment.propTypes = {
  author: PropTypes.object,
  comment: PropTypes.object,
  createdTime: PropTypes.string,
};

export default Comment;
