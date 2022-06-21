import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import PageTemplate from '../../feature/pageTemplate/PageTemplate';
import BaseCardContainer from '../../components/BaseCardContainer';
import AlarmSection from '../../feature/alarm/AlarmSection';
import { getNotifications } from '../../apis';
import { useAuthContext } from '../../contexts/UserProvider';


const AlarmPage = () => {
  // 로그인이 되었는지 먼저 확인
  const [isLoading, setLoading] = useState(true);
  const [notSeenAlarms, setNonSeenAlarms] = useState([]);
  const [seenAlarms, setSeenAlarms] = useState([]);
  const { authUser } = useAuthContext();
  const navigator = useNavigate();
  useEffect(() => {
    const getAlarms = async () => {
      setLoading(true);
      console.log(authUser);
      const alarms = await getNotifications(authUser.token); // jwt 값 할당해야함

      const seen = alarms.filter((alarm) => alarm.seen === true);
      setSeenAlarms(seen);
      const notSeen = alarms.filter((alarm) => alarm.seen === false);
      setNonSeenAlarms(notSeen);

      setLoading(false);
    };

    getAlarms();
  }, [authUser]);

  const onClickPrevBtn = () => {
    navigator(-1);
  };

  return (
    <PageTemplate>
      {!isLoading ? (
        <S.CardWrapperForSlide>
          <BaseCardContainer overflow="scroll">
            <S.AlarmPageContainer>
              <S.PrevButton onClick={onClickPrevBtn}>&gt; 접기</S.PrevButton>
              <AlarmSection title="읽지 않음" alarms={notSeenAlarms} />
              <AlarmSection title="읽음" alarms={seenAlarms} />
            </S.AlarmPageContainer>
          </BaseCardContainer>
        </S.CardWrapperForSlide>
      ) : (
        <div />
      )}
    </PageTemplate>
  );
};

export default AlarmPage;
