import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './style';
import PageTemplate from '../../feature/pageTemplate/PageTemplate';
import BaseCardContainer from '../../components/BaseCardContainer';
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import Divider from '../../components/Divider/index';
import ProfileCard from '../../feature/Cards/ProfileCard';
import Icon from '../../components/Icon';
import { TabItem } from '../../components/Tab';
import DummyData from '../../assets/data/dummyData';
import { getChannelPosts, getAuthorPosts } from '../../apis/index';

// id값을 받아와서 파라미터 받아오면, userID===params 나의 페이지마 드러면 로그아웃
//

const UserProfilePage = () => {
  const [praiseCardActive, setPraiseCardActive] = useState(true);

  const [target, setTarget] = useState(null);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [praisePosts, setPraisePosts] = useState([]);
  const { id } = useParams;

  const CHANNEL_ID = '62a19123d1b81239d875d20d';

  const onPraiseCardClick = () => {
    setPraiseCardActive(true);
  };

  const onPraisedCardClick = () => {
    setPraiseCardActive(false);
  };

  // 100개를 쏴서 다져와서렌더링 100개 내꺼다
  // 10개씩 렌더링을 무한스크롤, 무한스크롤 할때에는 offset 과 Page를 state에 할당
  // 그리고 내가 받은 칭찬 카드를 필터 하고 나서 그걸 State에 넣어보는걳은..?
  // 이제 해야할 것 :
  // 1. 칭찬받은 카드 불러오는 로직 구현하기.
  // 2. praiseCardActive값에 따라 칭찬카드/칭찬받은카드 페이지 보여주기
  // 3. 현재 로그인된 유저 아이디와 url의 아이디를 비교하여 프로필편집, 로그아웃 아이콘 보여주기
  // 4. 15분까지 기깔나게 쉬기

  const getNextPraisingPost = () => {
    setLoading(true);
    console.log('start loading');
    const DummyId = '62a8349bcab1ef0259bc53fc';
    getAuthorPosts(DummyId, offset, 5) //
      .then((response) => {
        if (response === []) {
          console.log('no more cards to load');
          return;
        }
        const newPosts = [...praisePosts, ...response];
        setPraisePosts(newPosts || DummyData.Posts);
      })
      .then(() => {
        setOffset(offset + 5);
      });
    setLoading(false);
    console.log('end loading');
  };

  const getNextPosts = () => {
    setLoading(true);
    console.log('start loading');
    getChannelPosts(CHANNEL_ID, offset, 5)
      .then((response) => {
        if (response === []) {
          console.log('no more cards to load');
          return;
        }
        console.log(response);
        const newPosts = [...praisePosts, ...response];
        setPraisePosts(newPosts || DummyData.Posts);
      })
      .then(() => {
        setOffset(offset + 5);
      });
    setLoading(false);
    console.log('end loading');
  };

  const onIntersect = async (entries, observer) => {
    if (praisePosts.length !== offset) {
      console.log('no more cards to load');
      return;
    }
    entries.forEach((entry) => {
      if (entry.isIntersecting && !loading) {
        observer.unobserve(entry.target);
        getNextPosts();
        observer.observe(entry.target);
      }
    });
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.3,
      });
      observer.observe(target);
      console.log('observe is done');
    }
    return () => observer && observer.disconnect();
  }, [target]);

  // 최초 랜더링
  useEffect(() => {
    const getPosts = () => {
      getNextPraisingPost();
    };
    getPosts();
  }, []);

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
        {praisePosts.map((post, idx) => (
          <S.ProfileCardWrapper>
            {praisePosts.length - 1 === idx ? (
              <S.InfinityScrollCardWrapper ref={setTarget}>
                <ProfileCard post={post} key={post._id} />
              </S.InfinityScrollCardWrapper>
            ) : (
              <ProfileCard post={post} key={post._id} />
            )}
          </S.ProfileCardWrapper>
        ))}
      </BaseCardContainer>
    </PageTemplate>
  );
};

export default UserProfilePage;
