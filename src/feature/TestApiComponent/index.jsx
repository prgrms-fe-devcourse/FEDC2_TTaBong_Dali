import React, { useEffect, useState } from 'react';
import {
  createPost,
  deletePost,
  getAllChannels,
  getAllUsers,
  getAuthorPosts,
  getAuthUser,
  getChannelPosts,
  getConversations,
  getMessages,
  getSpecificChannel,
  getSpecificPost,
  getSpecificUser,
  logIn,
  postMessage,
  putPost,
  signUp,
} from '../../apis';
import MainCard from '../Cards/MainCard';

function TestApiComponent() {
  const [channel, setChannel] = useState({});
  const [authInput, setAuthInput] = useState({
    email: '',
    password: '',
    fullName: '',
  });
  const [curUser, setCurUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [receiver, setReceiver] = useState({});
  const [msgInput, setMsgInput] = useState('');
  const [postInput, setPostInput] = useState('');
  const [posts, setPosts] = useState([]);
  const [editPostInput, setEditPostInput] = useState('');

  useEffect(() => {
    const fetchAllChannels = async () => {
      const channels = await getAllChannels();

      console.log('-------------');
      console.log('all channels');
      console.log(channels);
      console.log('-------------');
    };

    const fetchTestChannel = async () => {
      const testChannel = await getSpecificChannel('Test');

      setChannel(testChannel);
    };

    const fetchAllUsers = async () => {
      const allUsers = await getAllUsers();

      setAllUsers(allUsers);
    };

    fetchAllChannels();
    fetchTestChannel();
    fetchAllUsers();
  }, []);

  const handleAuthInputChange = (e, type) => {
    const newAuthInput = { ...authInput };
    newAuthInput[type] = e.target.value;

    setAuthInput({
      ...newAuthInput,
    });
  };

  const handleLogInClick = async (e) => {
    const { user, token } = await logIn(authInput.email, authInput.password);

    if (!user) return;

    setCurUser({ ...user, password: authInput.password, token });
    setAuthInput({ email: '', password: '', fullName: '' });
  };

  const handleSignUpClick = async (e) => {
    const { user, token } = await signUp(
      authInput.email,
      authInput.fullName,
      authInput.password,
    );

    if (!user) return;

    console.log({ user, token });

    setAuthInput({ email: '', password: '', fullName: '' });
  };

  const handleIsAuthedClick = async () => {
    if (!curUser) return;

    const user = await getAuthUser(curUser.token);
    console.log(user);
  };

  const handlePrintMessageClick = async (userId) => {
    if (!curUser) return;

    const messages = await getMessages(curUser.token, userId);

    console.log(messages);
  };

  const handlePrintConversationClick = async () => {
    if (!curUser) return;

    const conversations = await getConversations(curUser.token);

    console.log(conversations);
  };

  const handleOtherUserClick = async (receiverId) => {
    const specificUser = await getSpecificUser(receiverId);

    if (!specificUser) return;

    setReceiver(specificUser);
  };

  const handleMsgInputChange = async (e) => {
    setMsgInput(e.target.value);
  };

  const handleSendMessageClick = async () => {
    const dm = JSON.stringify({
      type: 'msg',
      postId: '',
      content: msgInput,
    });

    const sentMessage = await postMessage(curUser.token, dm, receiver._id);

    setMsgInput('');

    console.log(sentMessage);
  };

  const handlePostInputChange = async (e) => {
    setPostInput(e.target.value);
  };

  const handleCreatePostClick = async (type) => {
    if (!receiver._id) {
      console.error('select receiver');

      return;
    }

    const title = JSON.stringify({
      type,
      receiver: {
        _id: receiver._id,
        fullName: receiver.fullName,
      },
      content: postInput,
      labels: ['warm', 'moved'],
    });

    const newPost = await await createPost(curUser.token, channel._id, title);

    const dm = JSON.stringify({
      type,
      postId: newPost._id,
      content: '',
    });

    const msg = await postMessage(curUser.token, dm, receiver._id);

    setReceiver({});
    setPostInput('');

    console.log('new posted!');
    console.log(newPost);
    console.log(msg);
  };

  const handleAllChannelPostsClick = async () => {
    const channelPosts = await getChannelPosts(channel._id);

    setPosts(channelPosts);
  };

  const handleAuthorPostsClick = async (userId) => {
    const authorPosts = await getAuthorPosts(userId);

    setPosts(authorPosts);
  };

  const handlePostInfoClick = async (postId) => {
    const specificPost = await getSpecificPost(postId);

    console.log(specificPost);
  };

  const handleDeletePostClick = async (postId) => {
    const res = await deletePost(curUser.token, postId);

    console.log(res);
  };

  const handleEditPostInputChange = async (e) => {
    setEditPostInput(e.target.value);
  };

  const handleEditPostClick = async (postId, postTitle) => {
    const title = JSON.stringify({
      ...JSON.parse(postTitle),
      content: editPostInput,
    });

    const res = await putPost(curUser.token, postId, channel._id, title);

    setEditPostInput('');

    setPosts([...posts].map((post) => (post._id === postId ? res : post)));
  };

  return (
    <>
      <p>
        Channel : {channel._id} / {channel.name}
      </p>
      <form>
        <input
          name="email"
          placeholder="email"
          onChange={(e) => handleAuthInputChange(e, 'email')}
          value={authInput.email}
        />
        <input
          name="password"
          placeholder="password"
          onChange={(e) => handleAuthInputChange(e, 'password')}
          value={authInput.password}
        />
        <input
          name="fullName"
          placeholder="fullName"
          onChange={(e) => handleAuthInputChange(e, 'fullName')}
          value={authInput.fullName}
        />
        <button type="button" onClick={(e) => handleLogInClick(e)}>
          LogIn
        </button>
        <button type="button" onClick={(e) => handleSignUpClick(e)}>
          SingUp
        </button>
        <button type="button" onClick={(e) => handleIsAuthedClick(e)}>
          isAuthed
        </button>
      </form>
      <p>
        curUser(id, fullName, decrypedPassword) : {curUser._id} /{' '}
        {curUser.fullName} / {curUser.password}
      </p>
      <p>curUser Token : {curUser.token}</p>
      <p>
        Messages
        {allUsers.map((user) => (
          <button
            type="button"
            onClick={() => {
              handlePrintMessageClick(user._id);
            }}
          >
            {user.fullName}
          </button>
        ))}
      </p>
      <p>
        Conversation
        <button type="button" onClick={handlePrintConversationClick}>
          show
        </button>
      </p>
      <p>
        OtherUsers :
        {allUsers
          .filter((user) => user._id !== curUser._id)
          .map((user) => (
            <button
              type="button"
              onClick={() => {
                handleOtherUserClick(user._id);
              }}
            >
              {user.fullName}
            </button>
          ))}
      </p>
      <p>
        receiver(id, fullName, email) : {receiver._id} / {receiver.fullName} /{' '}
        {receiver.email}
      </p>
      <p>
        direct message :
        <input name="dm" value={msgInput} onChange={handleMsgInputChange} />
        <button type="button" onClick={handleSendMessageClick}>
          SEND
        </button>
      </p>
      <p>
        post input :
        <input
          name="post"
          value={postInput}
          onChange={(e) => handlePostInputChange(e)}
        />
        <button type="button" onClick={() => handleCreatePostClick('TTaBong')}>
          TTaBong
        </button>
        <button
          type="button"
          onClick={() => handleCreatePostClick('BigTTaBong')}
        >
          BigTTaBong
        </button>
      </p>
      <p>
        <button type="button" onClick={handleAllChannelPostsClick}>
          all
        </button>
        {allUsers.map((user) => (
          <button
            type="button"
            onClick={() => handleAuthorPostsClick(user._id)}
          >
            author: {user.fullName}
          </button>
        ))}
      </p>
      <p>
        <p>posts</p>
        {posts.map((post) => (
          <p>
            <p>
              <button
                type="button"
                onClick={() => handlePostInfoClick(post._id)}
              >
                {post._id}
              </button>
              <button
                type="button"
                onClick={() => handleDeletePostClick(post._id)}
              >
                DELETE
              </button>
              Edit :
              <input
                name="edit"
                value={editPostInput}
                onChange={handleEditPostInputChange}
              />
              <button
                type="button"
                onClick={() => handleEditPostClick(post._id, post.title)}
              >
                Edit
              </button>
            </p>
            {post.title}
            <MainCard post={post} />
          </p>
        ))}
      </p>
    </>
  );
}

export default TestApiComponent;
