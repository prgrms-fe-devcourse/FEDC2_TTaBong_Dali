import {
  useMemo,
  createContext,
  useContext,
  useReducer,
  useEffect,
} from 'react';

import { getCookie } from '../utils/cookies';

const ChannelContext = createContext();
export const useChannelContext = () => useContext(ChannelContext);

const initialChannelState = {
  channelName: '',
  channelId: '',
};

const actionType = {
  getChannel: 'GET_CHANNEL',
};

const channelReducer = (_, action) => {
  switch (action.type) {
    case actionType.getChannel:
      return {
        channelName: action.channelName,
        channelId: action.channelId,
      };
    default:
      throw new Error('Error');
  }
};

const ChannelProvider = ({ children }) => {
  const [channel, dispatch] = useReducer(channelReducer, initialChannelState);

  useEffect(() => {
    const { channelName, channelId } =
      getCookie('channel') || initialChannelState;

    dispatch({
      type: actionType.getChannel,
      channelName,
      channelId,
    });
  }, []);

  const ChannelContextProviderValue = useMemo(
    () => ({ channel, dispatch }),
    [channel, dispatch],
  );

  return (
    <ChannelContext.Provider value={ChannelContextProviderValue}>
      {children}
    </ChannelContext.Provider>
  );
};

export default ChannelProvider;
