import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
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
import { getAllUsers } from '../../apis/users';
import { useAuthContext } from '../../contexts/UserProvider';
import { removeCookie } from '../../utils/cookies';
import Spinner from '../../components/Spinner';

const UserProfilePage = () => {
  const { authUser, dispatch } = useAuthContext();
  const [pageUserInfo, setPageUserInfo] = useState({});

  const [praisingCardActive, setPraisingCardActive] = useState(true);
  const [loading, setLoading] = useState(false);

  const [praisingPosts, setPraisingPosts] = useState([]);
  const [praisedPosts, setPraisedPosts] = useState([]);

  const CHANNEL_ID = '62a19123d1b81239d875d20d';

  const { id } = useParams();
  const navigate = useNavigate();

  const onPraiseCardClick = () => {
    setPraisingCardActive(true);
  };

  const onPraisedCardClick = () => {
    setPraisingCardActive(false);
  };

  const handleLogOut = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      removeCookie('user');
      dispatch({ type: 'LOGOUT_USER' });
      navigate('/');
    }
  };

  const getUser = async () => {
    const userList = await getAllUsers();
    const thisIsUser = userList.find((user) => user._id === id);
    setPageUserInfo(thisIsUser);
  };

  const getNextPraisingPosts = async () => {
    await getAuthorPosts(id, 0).then((response) => {
      if (response === []) {
        return;
      }
      const newPosts = [...praisingPosts, ...response];
      setPraisingPosts(newPosts);
    });
  };

  const getNextPraisedPosts = async () => {
    await getChannelPosts(CHANNEL_ID, 0).then((response) => {
      if (response === []) {
        return;
      }
      const filteredResponse = response.filter(
        (post) => JSON.parse(post.title).receiver._id === id,
      );

      const newPosts = [...praisedPosts, ...filteredResponse];
      setPraisedPosts(newPosts);
    });
  };

  useEffect(() => {
    const render = async () => {
      setLoading(true);
      await getUser();
      await getNextPraisingPosts();
      await getNextPraisedPosts();
      setLoading(false);
    };
    render();
  }, []);

  return (
    <PageTemplate page="user">
      {loading ? (
        <S.SpinnerWrapper>
          <Spinner />
        </S.SpinnerWrapper>
      ) : (
        <BaseCardContainer opacityType={0.7} padding={[2, 1, 2, 1]}>
          <S.ProfilePageContainer>
            <S.ProfileInfoContainer>
              <S.InfoLeftContainer>
                <S.InfoName>
                  {pageUserInfo.fullName && pageUserInfo.fullName}
                </S.InfoName>
                <Avatar size={60} />
              </S.InfoLeftContainer>
              <S.InfoRightContainer>
                <S.CountInfoWrapper>
                  <S.PraiseCountWrapper>
                    <div className="num">{praisingPosts.length}</div>
                    <div>칭찬 횟수</div>
                  </S.PraiseCountWrapper>
                  <S.CoinCountWrapper>
                    <div className="num">{praisedPosts.length}</div>
                    <div>코인 개수</div>
                  </S.CoinCountWrapper>
                </S.CountInfoWrapper>
                <Link to="/profileEdit">
                  {authUser.userId === pageUserInfo._id && (
                    <Button
                      type="button"
                      version="lightgrayOutlined"
                      className="button"
                    >
                      프로필 편집
                    </Button>
                  )}
                </Link>
              </S.InfoRightContainer>
              <Divider className="divider" />
              {authUser.userId === pageUserInfo._id && (
                <Icon
                  name="logout"
                  size={15}
                  className="logoutIcon"
                  onClick={handleLogOut}
                />
              )}
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
                  {praisingPosts.map((post) => (
                    <S.ProfileCardWrapper key={post._id}>
                      <ProfileCard post={post} key={post._id} />
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
                  {praisedPosts.map((post) => (
                    <S.ProfileCardWrapper key={post._id}>
                      <ProfileCard post={post} key={post._id} />
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
      )}
    </PageTemplate>
  );
};

export default UserProfilePage;
