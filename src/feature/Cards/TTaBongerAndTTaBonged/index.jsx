import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as S from './style';
import TB from '../../../assets/ttabong_card.svg';
import Avatar from '../../../components/Avatar';

const TTaBongerAndTTaBonged = ({
  authorName,
  authorId,
  authorImg,
  receiverName,
  receiverImg,
  receiverId,
}) => {
  const authorPath = `/test/${authorId}`;
  const receiverPath = `/test/${receiverId}`;
  console.log(authorId);
  return (
    <S.TTaBongsContainer>
      <S.StyledLink to={authorPath}>
        <Avatar avatarName={authorName} authorImg />
      </S.StyledLink>
      <S.TTaBongedContainer>
        <S.TTaBongIconWrapper>
          <img src={TB} alt="따봉" width="40px" height="40px" />
        </S.TTaBongIconWrapper>
        <S.StyledLink to={receiverPath} receiverId>
          <Avatar avatarName={receiverName} receiverImg />
        </S.StyledLink>
      </S.TTaBongedContainer>
    </S.TTaBongsContainer>
  );
};

TTaBongerAndTTaBonged.propTypes = {
  authorName: PropTypes.string.isRequired,
  receiverName: PropTypes.string.isRequired,
};

export default TTaBongerAndTTaBonged;
