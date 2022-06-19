import axios from 'axios';
import Proptypes from 'prop-types';
import apiClient from './api';

// 나의 알림 목록을 불러옵니다.
export const getNotifications = async (JWTtoken) => {
  try {
    const notifications = await axios.get(`/notifications`, {
      headers: {
        Authorization: `bearer ${JWTtoken}`,
      },
    });

    if (notifications.statusText === 'OK') {
      return notifications;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

getNotifications.propTypes = {
  JWTtoken: Proptypes.string.isRequired,
};

// 나에게 온 알림을 읽음처리 합니다.
export const getNotificationsSeen = async (JWTtoken) => {
  try {
    const notificationsSeen = await apiClient.get(`/notifications/seen`, {
      headers: {
        Authorization: `bearer ${JWTtoken}`,
      },
    });

    if (notificationsSeen.statusText === 'OK') {
      return notificationsSeen;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

getNotificationsSeen.propTypes = {
  JWTtoken: Proptypes.string.isRequired,
};

// 상대방에게 알림을 보냅니다.
// 원래는 서버에서 해주는게 맞는 작업이지만 API 호출로 알림을 보낼 수 있도록 작성했습니다.
export const postNotifications = async (
  JWTtoken,
  notificationType,
  userId,
  id = '',
  postId = null,
) => {
  try {
    const notification = await axios.post(`/notifications/create`, {
      headers: {
        Authorization: `bearer ${JWTtoken}`,
      },
      notificationType,
      postId,
      userId,
      notificationTypeId: id,
      // COMMENT일 경우엔 댓글 id
      // FOLLOW일 경우엔 팔로우 id
      // LIKE일 경우엔 좋아요 id
      // MESSAGE일 경우엔 메시지 id
    });

    if (notification.statusText === 'OK') {
      return notification;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

postNotifications.propTypes = {
  JWTtoken: Proptypes.string.isRequired,
  notificationType: Proptypes.oneOf(['COMMENT', 'FOLLOW', 'LIKE', 'MESSAGE']),
  userId: Proptypes.string.isRequired,
  postId: Proptypes.string,
  id: Proptypes.string,
};
