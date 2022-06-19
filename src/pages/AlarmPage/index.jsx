import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
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
      const alarms = await getNotifications(''); // jwt 값 할당해야함
      // const alarms = [{}]; // jwt 값 할당해야함

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

  return (
    <PageTemplate>
      {!isLoading ? (
        <BaseCardContainer>
          <AlarmSection title="읽지 않음" alarms={notSeenAlarms} />
          <AlarmSection title="읽음" alarms={seenAlarms} />
        </BaseCardContainer>
      ) : (
        <NotFoundPage />
      )}
    </PageTemplate>
  );
};

AlarmPage.propTypes = {};

export default AlarmPage;
