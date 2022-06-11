import axios from 'axios';
import Proptypes from 'prop-types';

const END_POINT = '/messages';

// 특정 사용자와 소통한 메시지 목록을 불러옵니다.
export const getMessages = async (JWTtoken, userId = '') => {
  try {
    const messages = await axios.get(`${END_POINT}?userId=${userId}`, {
      headers: {
        Authorization: `bearer ${JWTtoken}`,
      },
    });

    if (messages.statusText === 'OK') {
      return messages;
    }

    throw new Error(messages);
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
    const conversations = await axios.get(`${END_POINT}/conversations`, {
      headers: {
        Authorization: `bearer ${JWTtoken}`,
      },
    });

    if (conversations.statusText === 'OK') {
      return conversations;
    }

    throw new Error(conversations);
  } catch (e) {
    console.error(e);
  }
  return null;
};

getConversations.propTypes = {
  JWTtoken: Proptypes.string.isRequired,
};

// 특정 사용자에게 메시지를 전송합니다
export const postMessage = async (JWTtoken, message, receiver) => {
  try {
    const res = await axios.post(
      `${END_POINT}/create`,
      {
        message,
        receiver,
      },
      {
        headers: {
          Authorization: `bearer ${JWTtoken}`,
        },
      },
    );

    if (res.statusText === 'OK') {
      return res;
    }

    throw new Error(res);
  } catch (e) {
    console.error(e);
  }
  return null;
};

postMessage.propTypes = {
  JWTtoken: Proptypes.string.isRequired,
  message: Proptypes.string.isRequired,
  receiver: Proptypes.string.isRequired,
};

// 특정 사용자와 나눈 메시지를 읽음처리 합니다.
// TO BE IMPLEMENTED
export const putMessageSeen = async (JWTtoken, sender) => {
  await axios.put(`${END_POINT}/update-seen`, {
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
