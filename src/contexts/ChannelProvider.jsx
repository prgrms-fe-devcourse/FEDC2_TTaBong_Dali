import {
  useMemo,
  createContext,
  useContext,
  useReducer,
  useEffect,
} from 'react';
import { getSpecificChannel } from '../apis';
import Constants from '../commons/constants';

const ChannelContext = createContext();
export const useChannelContext = () => useContext(ChannelContext);

const initialChannelState = {
  channelName: '',
  channelId: '',
};

export const channelActionType = {
  initChannel: 'INIT_CHANNEL',
};

const channelReducer = (_, action) => {
  switch (action.type) {
    case channelActionType.initChannel:
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

  const handleInitChannel = async () => {
    const { _id: channelId, name: channelName } = await getSpecificChannel(
      Constants.CHANNEL_NAME,
    );

    await dispatch({
      type: channelActionType.initChannel,
      channelId,
      channelName,
    });
  };

  useEffect(() => {
    const { channelName, channelId } = initialChannelState;

    dispatch({
      type: channelActionType.initChannel,
      channelName,
      channelId,
    });

    handleInitChannel();
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
