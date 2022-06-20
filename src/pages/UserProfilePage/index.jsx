import React, { useState, useEffect } from 'react';
import * as S from './style';
import PageTemplate from '../../feature/pageTemplate/PageTemplate';
import BaseCardContainer from '../../components/BaseCardContainer';
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import Divider from '../../components/Divider/index';
import Icon from '../../components/Icon';
import { TabItem } from '../../components/Tab';
import ProfileCard from '../../feature/Cards/ProfileCard';
import DummyData from '../../assets/data/dummyData';
import { getChannelPosts, getAuthorPosts } from '../../apis/index';

const UserProfilePage = () => {
  const [praiseCardActive, setPraiseCardActive] = useState(true);
  const [praisePosts, setPraisePosts] = useState([]);
  const [praisedPosts, setPraisedPosts] = useState([]);
  const CHANNEL_ID = '62a19123d1b81239d875d20d';

  const onPraiseCardClick = () => {
    setPraiseCardActive(true);
  };

  const onPraisedCardClick = () => {
    setPraiseCardActive(false);
  };

  useEffect(() => {
    console.log(DummyData.Posts);
    const getPosts = async () => {
      await getChannelPosts(CHANNEL_ID, 10).then((response) => {
        setPraisePosts(response || DummyData.Posts);
        console.log('response : ', response);
      });
    };
    getPosts();
    setPraisePosts(DummyData.Posts);
    console.log(praisePosts);
  }, []);

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
        <S.TapWrapper>
          <TabItem
            active={praiseCardActive === true}
            onClick={onPraiseCardClick}
          >
            칭찬카드
          </TabItem>
          <TabItem
            active={praiseCardActive !== true}
            onClick={onPraisedCardClick}
          >
            칭찬받은카드
          </TabItem>
        </S.TapWrapper>
        <S.ProfileCardWrapper>
          {praisePosts.map((post) => (
            <ProfileCard post={post} key={post._id} />
          ))}
        </S.ProfileCardWrapper>
      </BaseCardContainer>
    </PageTemplate>
  );
};

export default UserProfilePage;
