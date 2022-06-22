import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import TB from '../../../assets/ttabong_card.svg';
import BigTB from '../../../assets/ttabong_card_big.svg';
import Avatar from '../../../components/Avatar';

const TTaBongerAndTTaBonged = ({
  authorId,
  author,
  receiverName,
  receiverId,
  receiver = { image: null },
  type,
}) => {
  const navigator = useNavigate();

  const onClickTTaBoner = () => {
    navigator(`/userProfile/${author._id}`);
  };

  const onClickTTaBoned = () => {
    navigator(`/userProfile/${receiverId}`);
  };
  return (
    <S.TTaBongsContainer>
      <Avatar
        onClick={onClickTTaBoner}
        avatarName={author.fullName}
        src={author.image || undefined}
      />
      <S.TTaBongedContainer>
        <S.TTaBongIconWrapper className={type === 'BigTTaBong' && 'Big'}>
          <img
            src={type === 'BigTTaBong' ? BigTB : TB}
            alt="따봉"
            width="40px"
            height="40px"
          />
        </S.TTaBongIconWrapper>
        {/* {console.log(receiver)} */}
        <Avatar
          onClick={onClickTTaBoned}
          avatarName={receiverName}
          src={receiver.image || undefined}
        />
      </S.TTaBongedContainer>
    </S.TTaBongsContainer>
  );
};

TTaBongerAndTTaBonged.propTypes = {
  receiverName: PropTypes.string,
};

export default TTaBongerAndTTaBonged;
