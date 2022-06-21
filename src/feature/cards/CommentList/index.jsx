import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import Comment from '../Comment';

const CommentList = ({ comments = [], height = 232 }) => {
  return (
    <S.CommentListContainer height={height}>
      <S.CountSpan>댓글 수 {comments.length}개</S.CountSpan>
      <S.CommentList>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment._id}
              author={comment.author}
              createdTime={comment.updatedAt}
              comment={comment.comment}
            />
          );
        })}
      </S.CommentList>
    </S.CommentListContainer>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array,
  height: PropTypes.number,
};

export default CommentList;
