import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import Avatar from '../../../components/Avatar';
import Label from '../../../components/Label';
import LabelList from '../LabelList';
import BaseCardContainer from '../../../components/BaseCardContainer';

const ProfileCard = ({ post }) => {
  const { _id, title, author } = post;
  const {
    type = '',
    receiver = '이름',
    content = '내용',
    labels,
  } = JSON.parse(title);

  const labelArr = Object.values(labels).filter((label) => label.length > 0);

  return (
    <BaseCardContainer padding={[1, 1, 1, 1]} height="8rem" max-width="10rem">
      <S.ContentWrapper>
        <Avatar size={50} avatarName={author.fullName} />
        <S.ContentRightWrapper>
          <S.Title>칭찬 사유</S.Title>
          <S.Content>{content}</S.Content>
          <S.LabelContainer>
            <LabelList labelItems={labelArr} />
          </S.LabelContainer>
        </S.ContentRightWrapper>
      </S.ContentWrapper>
    </BaseCardContainer>
  );
};

ProfileCard.propTypes = {};

export default ProfileCard;
