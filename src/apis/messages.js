import axios from 'axios';
import Proptypes from 'prop-types';

// 특정 사용자와 소통한 메시지 목록을 불러옵니다.
export const getMessages = async (JWTtoken, userId = '') => {
  try {
    const messages = await axios.get(`/messages?userId=${userId}`, {
      headers: {
        Authorization: `bearer ${JWTtoken}`,
      },
    });

    if (messages.statusText === 'OK') {
      return messages;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

getMessages.propTypes = {
  JWTtoken: Proptypes.string.isRequired,
  userId: Proptypes.string.isRequired,
};

// 나와 메시지함을 불러옵니다.
export const getConversations = async (JWTtoken) => {
  try {
    const conversations = await axios.get(`/messages/conversations`, {
      headers: {
        Authorization: `bearer ${JWTtoken}`,
      },
    });

    if (conversations.statusText === 'OK') {
      return conversations;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

getConversations.propTypes = {
  JWTtoken: Proptypes.string.isRequired,
};

// 특정 사용자에게 메시지를 전송합니다
export const postMessages = async (JWTtoken, message, receiver) => {
  try {
    const messages = await axios.post(`/messages/create`, {
      headers: {
        Authorization: `bearer ${JWTtoken}`,
      },
      message,
      receiver,
    });

    if (messages.statusText === 'OK') {
      return messages;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

postMessages.propTypes = {
  JWTtoken: Proptypes.string.isRequired,
  message: Proptypes.string.isRequired,
  receiver: Proptypes.string.isRequired,
};

// 특정 사용자와 나눈 메시지를 읽음처리 합니다.
// notification 읽음처리는 get인데 여기는 왜 put?
export const putMessageSeen = async (JWTtoken, sender) => {
  await axios.put(`/messages/update-seen`, {
    headers: {
      Authorization: `bearer ${JWTtoken}`,
    },
    sender,
  });
};

putMessageSeen.propTypes = {
  JWTtoken: Proptypes.string.isRequired,
  sender: Proptypes.string.isRequired,
};
