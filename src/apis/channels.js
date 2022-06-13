import Proptypes from 'prop-types';
import apiClient from './api';

const CHANNELS = '/channels';

// 채널 목록을 불러옵니다
export const getAllChannels = async () => {
  const channels = await apiClient.get(`${CHANNELS}`);

  return channels;
};

// 특정 채널 정보를 불러옵니다.
export const getSpecificChannel = async (channelName) => {
  const specificChannel = await apiClient.get(`${CHANNELS}/${channelName}`);

  return specificChannel;
};

getSpecificChannel.propTypes = {
  channelName: Proptypes.string.isRequired,
};
