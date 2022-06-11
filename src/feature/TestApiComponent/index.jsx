import React, { useEffect, useState } from 'react';
import {
  getAllChannels,
  getAllUsers,
  getAuthUser,
  getSpecificChannel,
  getSpecificUser,
  logIn,
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

  const handleOtherUserClick = async (receiverId) => {
    const { data } = await getSpecificUser(receiverId);

    if (!data) return;

    setReceiver(data);
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
    </>
  );
}

export default TestApiComponent;
