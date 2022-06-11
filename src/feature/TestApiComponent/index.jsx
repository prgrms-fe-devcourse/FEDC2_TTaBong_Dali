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
      const { data } = await getAllChannels();

      console.log('-------------');
      console.log('all channels');
      console.log(data);
      console.log('-------------');
    };

    const fetchTestChannel = async () => {
      const { data } = await getSpecificChannel('Test');

      setChannel(data);
    };

    const fetchAllUsers = async () => {
      const { data } = await getAllUsers();

      setAllUsers(data);
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
    const { data } = await logIn(authInput.email, authInput.password);
    const { user, token } = data;

    if (!user) return;

    console.log({ user, token });

    setCurUser({ ...user, password: authInput.password, token });
    setAuthInput({ email: '', password: '', fullName: '' });
  };

  const handleSignUpClick = async (e) => {
    const { data } = await signUp(
      authInput.email,
      authInput.fullName,
      authInput.password,
    );
    const { user, token } = data;

    if (!user) return;

    console.log({ user, token });

    setAuthInput({ email: '', password: '', fullName: '' });
  };

  const handleIsAuthedClick = async () => {
    if (!curUser) return;

    const { data } = await getAuthUser(curUser.token);
    console.log(data);
  };

  const handlePrintMessageClick = async (userId) => {
    if (!curUser) return;

    const { data } = await getMessages(curUser.token, userId);

    console.log(data);
  };

  const handlePrintConversationClick = async () => {
    if (!curUser) return;

    const { data } = await getConversations(curUser.token);

    console.log(data);
  };

  const handleOtherUserClick = async (receiverId) => {
    const { data } = await getSpecificUser(receiverId);

    if (!data) return;

    setReceiver(data);
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

    const { data } = await postMessage(curUser.token, dm, receiver._id);

    setMsgInput('');

    console.log(data);
  };

  const handlePostInputChange = async (e) => {
    setPostInput(e.target.value);
  };

  const handleCreatePostClick = async (type) => {
    const title = JSON.stringify({
      type,
      receiver: receiver._id,
      content: postInput,
    });

    const post = await (
      await createPost(curUser.token, channel._id, title)
    ).data;

    const dm = JSON.stringify({
      type,
      postId: post._id,
      content: '',
    });

    const msg = await postMessage(curUser.token, dm, receiver._id);

    setReceiver({});
    setPostInput('');

    console.log(post);
    console.log(msg);
  };

  const handleAllChannelPostsClick = async () => {
    const { data } = await getChannelPosts(channel._id);

    setPosts(data);
  };

  const handleAuthorPostsClick = async (userId) => {
    const { data } = await getAuthorPosts(userId);

    setPosts(data);
  };

  const handlePostInfoClick = async (postId) => {
    const { data } = await getSpecificPost(postId);

    console.log(data);
  };

  const handleDeletePostClick = async (postId) => {
    const { data } = await deletePost(curUser.token, postId);

    console.log(data);
  };

  const handleEditPostInputChange = async (e) => {
    setEditPostInput(e.target.value);
  };

  const handleEditPostClick = async (postId, postTitle) => {
    const title = JSON.stringify({
      ...JSON.parse(postTitle),
      content: editPostInput,
    });

    const { data } = await putPost(curUser.token, postId, channel._id, title);

    setEditPostInput('');

    setPosts([...posts].map((post) => (post._id === postId ? data : post)));
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
          </p>
        ))}
      </p>
    </>
  );
}

export default TestApiComponent;
