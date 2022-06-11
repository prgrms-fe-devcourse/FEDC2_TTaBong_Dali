import React, { useState } from 'react';
import { getAuthUser, logIn, signUp } from '../../apis';

function TestApiComponent() {
  const [authInput, setAuthInput] = useState({
    email: '',
    password: '',
    fullName: '',
  });
  const [curUser, setCurUser] = useState({});

  const handleAuthInputChange = (e, type) => {
    const newAuthInput = { ...authInput };
    newAuthInput[type] = e.target.value;

    setAuthInput({
      ...newAuthInput,
    });
  };

  const handleLogInClick = async () => {
    const { data } = await logIn(authInput.email, authInput.password);
    const { user, token } = data;

    if (!user) return;

    console.log({ user, token });

    setCurUser({ ...user, password: authInput.password, token });
    setAuthInput({ email: '', password: '', fullName: '' });
  };

  const handleSignUpClick = async () => {
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

  return (
    <>
      <form>
        <input
          name="email"
          placeholder="email"
          onChange={(e) => handleAuthInputChange(e, 'email')}
        />
        <input
          name="password"
          placeholder="password"
          onChange={(e) => handleAuthInputChange(e, 'password')}
        />
        <input
          name="fullName"
          placeholder="fullName"
          onChange={(e) => handleAuthInputChange(e, 'fullName')}
        />
        <button type="button" onClick={handleLogInClick}>
          LogIn
        </button>
        <button type="button" onClick={handleSignUpClick}>
          SingUp
        </button>
        <button type="button" onClick={handleIsAuthedClick}>
          isAuthed
        </button>
      </form>
      <p>
        curUser(id, fullName, decrypedPassword) : {curUser._id} /{' '}
        {curUser.fullName} / {curUser.password}
      </p>
      <p>curUser Token : {curUser.token}</p>
    </>
  );
}

export default TestApiComponent;
