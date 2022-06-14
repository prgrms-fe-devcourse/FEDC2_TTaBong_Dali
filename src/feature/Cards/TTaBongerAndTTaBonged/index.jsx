import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import TB from '../../../assets/ttabong_card.svg';
import Avatar from '../../../components/Avatar';

const TTaBongerAndTTaBonged = ({ authorName, receiverName }) => {
  return (
    <S.TTaBongsContainer>
      <Avatar avatarName={authorName} />
      <img src={TB} alt="따봉" width="40px" height="40px" />
      <Avatar avatarName={receiverName} />
    </S.TTaBongsContainer>
  );
};

TTaBongerAndTTaBonged.propTypes = {};

export default TTaBongerAndTTaBonged;
