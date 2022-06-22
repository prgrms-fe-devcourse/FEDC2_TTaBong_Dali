import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import Avatar from '../../../components/Avatar';
import Label from '../../../components/Label';
import LabelList from '../LabelList';
import BaseCardContainer from '../../../components/BaseCardContainer';
import { getSpecificUser } from '../../../apis';

const ProfileCard = ({ post }) => {
  const { _id, title, author, image } = post;
  const {
    type = '',
    receiver = '이름',
    content = '내용',
    labels = [],
  } = JSON.parse(title);

  const labelArr = Object.values(labels).filter((label) => label.length > 0);

  return (
    <S.ProfileCardWrapper>
      <BaseCardContainer
        padding={[1, 1, 1, 1]}
        height="6.5rem"
        max-width="10rem"
      >
        <S.ContentWrapper>
          <Avatar size={50} avatarName={author.fullName} src={author.image} />
          <S.ContentRightWrapper>
            <S.Title>칭찬 사유</S.Title>
            <S.Content>{content}</S.Content>
            <S.LabelContainer>
              <LabelList labelItems={labelArr} />
            </S.LabelContainer>
          </S.ContentRightWrapper>
        </S.ContentWrapper>
      </BaseCardContainer>
    </S.ProfileCardWrapper>
  );
};

ProfileCard.propTypes = {};

export default ProfileCard;
