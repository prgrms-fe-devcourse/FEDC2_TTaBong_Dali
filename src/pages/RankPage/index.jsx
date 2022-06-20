import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import * as S from './style';
import PageTemplate from '../../feature/pageTemplate/PageTemplate';
import UserInfoItem from '../../components/UserInfoItem';
import BaseCardContainer from '../../components/BaseCardContainer';
import RankFirstInfo from '../../feature/rank/RankFirstInfo';
import { getAllUsers, getChannelPosts } from '../../apis/index';
import { TabItem } from '../../components/Tab';
import Constants from '../../commons/constants/index';

const RankPage = () => {
  const TTABONG = 'TTaBongCount';
  const COIN = 'coinCount';

  const [users, setUsers] = useState([
    {
      fullName: '',
    },
  ]);
  const [goods, setGoods] = useState(TTABONG);

  const sortGoods = (goods, res = users) => {
    setUsers(
      res.sort((pre, cur) => {
        if (pre[goods] < cur[goods]) return 1;
        if (pre[goods] > cur[goods]) return -1;
        if (pre._id > cur._id) return 1;
        if (pre._id < cur._id) return -1;
        return 0;
      }),
    );
  };

  const onClickTab = (type) => {
    setGoods(type);
    sortGoods(type);
  };

  const sortUsers = async () => {
    const allUsers = await getAllUsers();
    const channelPosts = await getChannelPosts(Constants.TEST_CHANNEL_ID);
    const allUserInfo = allUsers.map(({ fullName, _id, posts }) => {
      return { _id, fullName, TTaBongCount: posts.length, coinCount: 0 };
    });

    channelPosts.forEach(({ title }) => {
      const { type, receiver } = JSON.parse(title);

      for (let i = 0; i < allUserInfo.length; i += 1) {
        const { _id, coinCount } = allUserInfo[i];
        if (receiver === _id) {
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
      const sortedUsers = await sortUsers();
      sortGoods(goods, sortedUsers);
    };
    fetchData();
  }, []);

  return (
    <PageTemplate page="rank">
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
        <BaseCardContainer height={600} opacityType={0.7}>
          <RankFirstInfo
            userName={users[0].fullName}
            TTaBongCount={goods === TTABONG ? users[0][TTABONG] : -1}
            coinCount={goods === COIN ? users[0][COIN] : -1}
          />
          <S.RankList>
            {users.slice(1).map((user, i) => {
              return (
                <UserInfoItem
                  rank={i + 2}
                  key={user._id}
                  userName={user.fullName}
                  TTaBongCount={goods === TTABONG ? user[TTABONG] : -1}
                  coinCount={goods === COIN ? user[COIN] : -1}
                />
              );
            })}
          </S.RankList>
          {/* @todo 사용자가 로그인 했다면 보여줘야함 */}
          <S.MyRankWrapper>
            <UserInfoItem rank={5} TTaBongCount={3} userName="사용자" />
          </S.MyRankWrapper>
        </BaseCardContainer>
      </S.RankPageContainer>
    </PageTemplate>
  );
};

export default RankPage;
