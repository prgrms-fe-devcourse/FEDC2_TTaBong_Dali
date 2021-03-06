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
import Toast from '../../components/Toast';
import { TabItem } from '../../components/Tab';
import { getChannelPosts, getAuthorPosts } from '../../apis/index';
import { getAllUsers } from '../../apis/users';
import { useAuthContext } from '../../contexts/UserProvider';
import { removeCookie } from '../../utils/cookies';
import Spinner from '../../components/Spinner';
import { useChannelContext } from '../../contexts/ChannelProvider';
import { LOGOUT_SUCCESS } from '../../commons/constants/string';

const UserProfilePage = () => {
  const { authUser, dispatch } = useAuthContext();
  const { channel } = useChannelContext();
  const { channelId, channelName } = channel;

  const [pageUserInfo, setPageUserInfo] = useState({});

  const [praisingCardActive, setPraisingCardActive] = useState(true);
  const [loading, setLoading] = useState(false);

  const [praisingPosts, setPraisingPosts] = useState([]);
  const [praisedPosts, setPraisedPosts] = useState([]);

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
      Toast.show(LOGOUT_SUCCESS);
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
    await getChannelPosts(channelId, 0).then((response) => {
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
                <Avatar size={60} src={pageUserInfo.image} />
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
                <S.IconContainer>
                  <Icon
                    name="logout"
                    size={15}
                    className="logoutIcon"
                    onClick={handleLogOut}
                  />
                </S.IconContainer>
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
                    <Link to={`/cardDetail/${post._id}`}>
                      <S.ProfileCardWrapper key={post._id}>
                        <ProfileCard post={post} />
                      </S.ProfileCardWrapper>
                    </Link>
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
                    <Link to={`/cardDetail/${post._id}`}>
                      <S.ProfileCardWrapper key={post._id}>
                        <ProfileCard post={post} />
                      </S.ProfileCardWrapper>
                    </Link>
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
