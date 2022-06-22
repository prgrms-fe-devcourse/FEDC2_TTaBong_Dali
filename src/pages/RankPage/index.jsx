import React, { useState, useEffect } from 'react';
import * as S from './style';
import PageTemplate from '../../feature/pageTemplate/PageTemplate';
import UserInfoItem from '../../components/UserInfoItem';
import BaseCardContainer from '../../components/BaseCardContainer';
import RankFirstInfo from '../../feature/rank/RankFirstInfo';
import Spinner from '../../components/Spinner';
import { getAllUsers, getChannelPosts } from '../../apis/index';
import { TabItem } from '../../components/Tab';
import Constants from '../../commons/constants/index';
import { useAuthContext } from '../../contexts/UserProvider';
import {
  channelActionType,
  useChannelContext,
} from '../../contexts/ChannelProvider';

const RankPage = () => {
  const TTABONG = 'TTaBongCount';
  const COIN = 'coinCount';

  const { authUser } = useAuthContext();
  const { channel } = useChannelContext();
  const { channelId } = channel;

  const [currentUser, setCurrentUser] = useState({});
  const [users, setUsers] = useState([{}]);
  const [goods, setGoods] = useState(TTABONG);
  const [loading, setLoading] = useState(false);

  const sortGoods = (goods, res = users) => {
    const sortedRank = res
      .sort((pre, cur) => {
        if (pre[goods] < cur[goods]) return 1;
        if (pre[goods] > cur[goods]) return -1;
        if (pre._id > cur._id) return 1;
        if (pre._id < cur._id) return -1;
        return 0;
      })
      .map((user, i) => {
        return { ...user, rank: i + 1 };
      });

    setUsers(sortedRank);
    setCurrentUser(sortedRank.filter(({ _id }) => _id === authUser.userId)[0]);
  };

  const onClickTab = (type) => {
    setGoods(type);
    sortGoods(type);
  };

  const sortUsers = async () => {
    const allUsers = await getAllUsers();
    const channelPosts = await getChannelPosts(channelId);
    const allUserInfo = allUsers.map(({ fullName, _id, posts }) => {
      return { _id, fullName, TTaBongCount: posts.length, coinCount: 0 };
    });

    channelPosts.forEach(({ title }) => {
      const { type, receiver } = JSON.parse(title);

      for (let i = 0; i < allUserInfo.length; i += 1) {
        const { _id, coinCount } = allUserInfo[i];
        if (receiver._id === _id) {
          const count = type === 'TTaBong' ? coinCount + 1 : coinCount + 2;
          allUserInfo[i].coinCount = count;
          break;
        }
      }
    });
    return allUserInfo;
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const sortedUsers = await sortUsers();
      sortGoods(goods, sortedUsers);
      setLoading(false);
    };
    fetchData();
  }, [authUser]);

  return (
    <PageTemplate page="rank">
      {loading ? (
        <Spinner />
      ) : (
        <S.RankPageContainer>
          <S.TabContainer>
            <TabItem
              active={goods === TTABONG}
              onClick={() => onClickTab(TTABONG)}
            >
              따봉왕
            </TabItem>
            <TabItem active={goods === COIN} onClick={() => onClickTab(COIN)}>
              코인왕
            </TabItem>
          </S.TabContainer>
          <S.BaseCardContainer>
            <BaseCardContainer opacityType={0.7}>
              <S.RankInfoContainer>
                <RankFirstInfo
                  userName={users[0].fullName}
                  TTaBongCount={goods === TTABONG ? users[0][TTABONG] : -1}
                  coinCount={goods === COIN ? users[0][COIN] : -1}
                />
                <S.RankList isAuth={authUser.isAuth}>
                  {users.slice(1).map((user) => (
                    <UserInfoItem
                      rank={user.rank}
                      key={user._id}
                      user={user}
                      TTaBongCount={goods === TTABONG ? user[TTABONG] : -1}
                      coinCount={goods === COIN ? user[COIN] : -1}
                    />
                  ))}
                </S.RankList>
                {authUser.isAuth && currentUser && (
                  <S.MyRankWrapper>
                    <UserInfoItem
                      rank={currentUser.rank}
                      user={currentUser}
                      TTaBongCount={
                        goods === TTABONG ? currentUser[TTABONG] : -1
                      }
                      coinCount={goods === COIN ? currentUser[COIN] : -1}
                    />
                  </S.MyRankWrapper>
                )}
              </S.RankInfoContainer>
            </BaseCardContainer>
          </S.BaseCardContainer>
        </S.RankPageContainer>
      )}
    </PageTemplate>
  );
};

export default RankPage;
