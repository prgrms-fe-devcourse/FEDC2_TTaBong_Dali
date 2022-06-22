import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import TB from '../../../assets/ttabong_card.svg';
import BigTB from '../../../assets/ttabong_card_big.svg';
import Avatar from '../../../components/Avatar';
import { getSpecificUser } from '../../../apis';

const TTaBongerAndTTaBonged = ({ author, receiver, type, isMain = false }) => {
  const { fullName: authorName, _id: authorId, image: authorImage } = author;
  const { _id: receiverId, fullName: receiverName } = receiver;
  const [receiverImage, setReceiverImage] = useState(receiver.image);

  const fetchReceiver = async () => {
    const specificReceiver = await getSpecificUser(receiver._id);

    setReceiverImage(specificReceiver.image);
  };

  useEffect(() => {
    if (!receiverImage) {
      fetchReceiver();
    }
  }, []);

  const navigator = useNavigate();

  const onClickTTaBoner = () => {
    navigator(`/userProfile/${authorId}`);
  };

  const onClickTTaBoned = () => {
    navigator(`/userProfile/${receiverId}`);
  };
  return (
    <S.TTaBongsContainer>
      <Avatar
        onClick={!isMain ? onClickTTaBoner : null}
        avatarName={authorName}
        src={authorImage || undefined}
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
          onClick={!isMain ? onClickTTaBoned : null}
          avatarName={receiverName}
          src={receiverImage || undefined}
        />
      </S.TTaBongedContainer>
    </S.TTaBongsContainer>
  );
};

TTaBongerAndTTaBonged.propTypes = {};

export default TTaBongerAndTTaBonged;
