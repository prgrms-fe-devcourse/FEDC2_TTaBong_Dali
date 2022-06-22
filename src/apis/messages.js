import apiClient from './api';

const MESSAGES = '/messages';

// 특정 사용자와 소통한 메시지 목록을 불러옵니다.
export const getMessages = async (JWTtoken, userId = '') => {
  const messages = await apiClient.get(`${MESSAGES}?userId=${userId}`, {
    headers: {
      Authorization: `bearer ${JWTtoken}`,
    },
  });

  return messages;
};

// 나와 메시지함을 불러옵니다.
export const getConversations = async (JWTtoken) => {
  const conversations = await apiClient.get(`${MESSAGES}/conversations`, {
    headers: {
      Authorization: `bearer ${JWTtoken}`,
    },
  });

  return conversations;
};

// 특정 사용자에게 메시지를 전송합니다
export const postMessage = async (JWTtoken, message, receiver) => {
  const sentMessage = await apiClient.post(
    `${MESSAGES}/create`,
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

  return sentMessage;
};

// 특정 사용자와 나눈 메시지를 읽음처리 합니다.
// TO BE IMPLEMENTED
export const putMessageSeen = async (JWTtoken, sender) => {
  // await apiClient.put(`${MESSAGES}/update-seen`, {
  //   headers: {
  //     Authorization: `bearer ${JWTtoken}`,
  //   },
  //   sender,
  // });
};
