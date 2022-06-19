import React from 'react';
import * as S from './style';
import PageTemplate from '../../feature/pageTemplate/PageTemplate';
import BaseCardContainer from '../../components/BaseCardContainer';
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import Divider from '../../components/Divider/index';
import Icon from '../../components/Icon';

const UserProfilePage = () => {
  // Avatar에 훗날
  return (
    <PageTemplate>
      <BaseCardContainer opacityType={0.7}>
        <S.ProfileInfoContainer>
          <S.InfoLeftContainer>
            <S.InfoName>사용자 이름</S.InfoName>
            <S.InfoId>userId</S.InfoId>
            <Avatar size={60} />
          </S.InfoLeftContainer>
          <S.InfoRightContainer>
            <S.CountInfoWrapper>
              <S.PraiseCountWrapper>
                <div className="num">8</div>
                <div>칭찬 횟수</div>
              </S.PraiseCountWrapper>
              <S.CoinCountWrapper>
                <div className="num">12</div>
                <div>코인 개수</div>
              </S.CoinCountWrapper>
            </S.CountInfoWrapper>
            <Button version="lightgrayOutlined" className="button">
              프로필 편집
            </Button>
          </S.InfoRightContainer>
          <Divider className="divider" />
          <Icon name="logout" size={10} className="logoutIcon" />
        </S.ProfileInfoContainer>
      </BaseCardContainer>
    </PageTemplate>
  );
};

export default UserProfilePage;
