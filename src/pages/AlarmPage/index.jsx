import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import PageTemplate from '../../feature/pageTemplate/PageTemplate';
import BaseCardContainer from '../../components/BaseCardContainer';
import AlarmSection from '../../feature/Alarm/AlarmSection';
import { getNotifications } from '../../apis';
import NotFoundPage from '../NotFound';

const AlarmPage = () => {
  // 로그인이 되었는지 먼저 확인
  const [isLoading, setLoading] = useState(true);
  const [notSeenAlarms, setNonSeenAlarms] = useState([]);
  const [seenAlarms, setSeenAlarms] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    const getAlarms = async () => {
      setLoading(true);
      // const alarms = await getNotifications(''); // jwt 값 할당해야함
      const alarms = [{}]; // jwt 값 할당해야함

      if (!alarms) {
        alert('로그인을 해주세요');
        navigation('/login');
      } else {
        const seen = alarms.filter((alarm) => alarm.seen === true);
        setSeenAlarms(seen);
        const notSeen = alarms.filter((alarm) => alarm.seen === false);
        setNonSeenAlarms(notSeen);

        setLoading(false);
      }
    };

    getAlarms();
  }, []);

  const onClickPrevBtn = () => {
    navigation(-1);
  };

  return (
    <PageTemplate>
      {!isLoading ? (
        <S.CardWrapperForSlide>
          <BaseCardContainer>
            <S.AlarmPageContainer>
              <S.PrevButton onClick={onClickPrevBtn}>&gt; 접기</S.PrevButton>
              <AlarmSection title="읽지 않음" alarms={notSeenAlarms} />
              <AlarmSection title="읽음" alarms={seenAlarms} />
            </S.AlarmPageContainer>
          </BaseCardContainer>
        </S.CardWrapperForSlide>
      ) : (
        <NotFoundPage />
      )}
    </PageTemplate>
  );
};

export default AlarmPage;
