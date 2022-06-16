import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import Avatar from '../../../components/Avatar';
import { getDayString } from '../../../utils/getDayString';

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
