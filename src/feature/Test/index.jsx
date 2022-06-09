import React, { useState } from 'react';
import dummyData from '../../commons/data/dummyData';

const Test = () => {
  const { Users, Conversation } = dummyData;
  const [sender, setSender] = useState('');

  const showUserConversation = (userId) => {
    setSender(userId);
  };

  return (
    <>
      {Users.map((user) => (
        <button
          type="button"
          key={user._id}
          onClick={() => showUserConversation(user._id)}
        >
          {user.fullName}
        </button>
      ))}
      {sender && (
        <>
          <div>sender: {sender}</div>
          {Conversation.filter((conv) => conv.sender._id === sender).map(
            (conv) => (
              <div key={conv.createdAt}>
                receiver: {conv.receiver._id} / message: {conv.message}
              </div>
            ),
          )}
        </>
      )}
    </>
  );
};

export default Test;
