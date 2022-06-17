import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import TB from '../../../assets/ttabong_card.svg';
import Avatar from '../../../components/Avatar';

const TTaBongerAndTTaBonged = ({
  authorName,
  receiverName,
  authorOnClick,
  receiverOnClick,
}) => {
  return (
    <S.TTaBongsContainer>
      <Avatar avatarName={authorName} onClick={authorOnClick} />
      <S.TTaBongedContainer>
        <S.TTaBongIconWrapper>
          <img src={TB} alt="따봉" width="40px" height="40px" />
        </S.TTaBongIconWrapper>
        <Avatar avatarName={receiverName} onClick={receiverOnClick} />
      </S.TTaBongedContainer>
    </S.TTaBongsContainer>
  );
};

TTaBongerAndTTaBonged.propTypes = {
  authorName: PropTypes.string.isRequired,
  receiverName: PropTypes.string.isRequired,
};

export default TTaBongerAndTTaBonged;
