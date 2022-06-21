import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './style';
import PageTemplate from '../../feature/pageTemplate/PageTemplate';
import BaseCardContainer from '../../components/BaseCardContainer';
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import Divider from '../../components/Divider/index';
import ProfileCard from '../../feature/cards/ProfileCard';
import Icon from '../../components/Icon';
import { TabItem } from '../../components/Tab';
import { getChannelPosts, getAuthorPosts } from '../../apis/index';

const UserProfilePage = () => {
  const [praisingCardActive, setPraisingCardActive] = useState(true);
  const [loading, setLoading] = useState(false);

  const [praisingTarget, setPraisingTarget] = useState(null);
  const [praisedTarget, setPraisedTarget] = useState(null);

  const [praisingOffset, setPraisingOffset] = useState(0);
  const [praisedOffset, setPraisedOffset] = useState(0);

  const [praisingPosts, setPraisingPosts] = useState([]);
  const [praisedPosts, setPraisedPosts] = useState([]);

  const CHANNEL_ID = '62a19123d1b81239d875d20d';
  const PRAISING_LIMIT = 5;

  const onPraiseCardClick = () => {
    setPraisingCardActive(true);
  };

  const onPraisedCardClick = () => {
    setPraisingCardActive(false);
  };

  const { id } = useParams();

  // 100개를 쏴서 다져와서렌더링 100개 내꺼다
  // 10개씩 렌더링을 무한스크롤, 무한스크롤 할때에는 offset 과 Page를 state에 할당
  // 그리고 내가 받은 칭찬 카드를 필터 하고 나서 그걸 State에 넣어보는걳은..?
  // 이제 해야할 것 :
  // 1. 칭찬받은 카드 불러오는 로직 구현하기.
  // 2. praiseCardActive값에 따라 칭찬카드/칭찬받은카드 페이지 보여주기
  // 3. 현재 로그인된 유저 아이디와 url의 아이디를 비교하여 프로필편집, 로그아웃 아이콘 보여주기
  // 4. 15분까지 기깔나게 쉬기

  //
  const getNextPraisingPosts = () => {
    setLoading(true);
    getAuthorPosts(id, praisingOffset, PRAISING_LIMIT).then((response) => {
      if (response === []) {
        return;
      }
      const newPosts = [...praisingPosts, ...response];
      setPraisingPosts(newPosts);
      setPraisingOffset(praisingOffset + 5);
    });
    setLoading(false);
  };

  const onPraisingIntersect = async (entries, observer) => {
    if (praisingPosts.length !== praisingOffset) {
      return;
    }
    entries.forEach((entry) => {
      if (entry.isIntersecting && !loading) {
        observer.unobserve(entry.target);
        getNextPraisingPosts();
        observer.observe(entry.target);
      }
    });
  };

  useEffect(() => {
    let observer;
    if (praisingTarget) {
      observer = new IntersectionObserver(onPraisingIntersect, {
        threshold: 0.3,
      });
      observer.observe(praisingTarget);
    }
    return () => observer && observer.disconnect();
  }, [praisingTarget]);

  // =======================================

  const getNextPraisedPosts = () => {
    setLoading(true);
    getChannelPosts(CHANNEL_ID, praisedOffset, 100).then((response) => {
      if (response === []) {
        return;
      }

      const filteredResponse = response.filter(
        (post) => JSON.parse(post.title).receiver._id === id,
      );

      const newPosts = [...praisedPosts, ...filteredResponse];
      setPraisedPosts(newPosts);
      setPraisedOffset(praisedOffset + 100);
      // if (newPosts.length < 1) getNextPraisedPosts();
    });
    setLoading(false);
  };

  const onPraisedIntersect = async (entries, observer) => {
    if (praisedPosts.length !== praisedOffset) {
      return;
    }
    entries.forEach((entry) => {
      if (entry.isIntersecting && !loading) {
        observer.unobserve(entry.target);
        getNextPraisedPosts();
        observer.observe(entry.target);
      }
    });
  };

  useEffect(() => {
    let observer;
    if (praisedTarget) {
      observer = new IntersectionObserver(onPraisedIntersect, {
        threshold: 0.3,
      });
      observer.observe(praisedTarget);
    }
    return () => observer && observer.disconnect();
  }, [praisedTarget]);

  // 최초 랜더링
  useEffect(() => {
    // getNextPraisingPosts();
    getNextPraisedPosts();
  }, []);

  return (
    <PageTemplate>
      <BaseCardContainer opacityType={0.7} padding={[2, 1, 2, 1]}>
        <S.ProfilePageContainer>
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
              active={praisingCardActive === true}
              onClick={onPraiseCardClick}
            >
              칭찬카드
            </TabItem>
            <TabItem
              active={praisingCardActive !== true}
              onClick={onPraisedCardClick}
            >
              칭찬받은카드
            </TabItem>
          </S.TapWrapper>
          <S.ProfileCardContainer>
            {praisingCardActive ? (
              <div>
                {praisingPosts.map((post, idx) => (
                  <S.ProfileCardWrapper key={post._id}>
                    {praisingPosts.length - 1 === idx ? (
                      <S.InfinityScrollCardWrapper ref={setPraisingTarget}>
                        <ProfileCard post={post} key={post._id} />
                      </S.InfinityScrollCardWrapper>
                    ) : (
                      <ProfileCard post={post} key={post._id} />
                    )}
                  </S.ProfileCardWrapper>
                ))}
                <S.Announcement>
                  {praisingPosts.length === 0
                    ? '카드가 없습니다'
                    : '카드의 마지막입니다.'}
                </S.Announcement>
              </div>
            ) : (
              <div>
                {praisedPosts.map((post, idx) => (
                  <S.ProfileCardWrapper key={post._id}>
                    {praisedPosts.length - 1 === idx ? (
                      <S.InfinityScrollCardWrapper ref={setPraisedTarget}>
                        <ProfileCard post={post} key={post._id} />
                      </S.InfinityScrollCardWrapper>
                    ) : (
                      <ProfileCard post={post} key={post._id} />
                    )}
                  </S.ProfileCardWrapper>
                ))}
                <S.Announcement>
                  {praisedPosts.length === 0
                    ? '카드가 없습니다'
                    : '카드의 마지막입니다.'}
                </S.Announcement>
              </div>
            )}
          </S.ProfileCardContainer>
        </S.ProfilePageContainer>
      </BaseCardContainer>
    </PageTemplate>
  );
};

export default UserProfilePage;
