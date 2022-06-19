import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
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
  const TTaBongerPath = `/test/${authorId}`;
  const TTaBongedPath = `/test/${receiverId}`;
  const navigator = useNavigate();

  const onClickTTaBonger = () => {
    navigator(TTaBongerPath);
  };

  const onClickTTaBonged = () => {
    navigator(TTaBongedPath);
  };

  return (
    <S.TTaBongsContainer>
      <Avatar onClick={onClickTTaBonger} avatarName={authorName} authorImg />
      <S.TTaBongedContainer>
        <S.TTaBongIconWrapper>
          <img src={TB} alt="따봉" width="40px" height="40px" />
        </S.TTaBongIconWrapper>
        <Avatar
          onClick={onClickTTaBonged}
          avatarName={receiverName}
          receiverImg
        />
      </S.TTaBongedContainer>
    </S.TTaBongsContainer>
  );
};

TTaBongerAndTTaBonged.propTypes = {
  authorName: PropTypes.string.isRequired,
  receiverName: PropTypes.string.isRequired,
};

export default TTaBongerAndTTaBonged;
