import React from 'react';
import UserContents from '../../components/pages/UserContents';
import LoginContents from '../../components/pages/LoginContents';
import { useRecoilState } from 'recoil';
import { login } from '../../recoil/Atom';

const User = () => {
  const [isLogin, setIsLogin] = useRecoilState(login);
  return <>{isLogin ? <UserContents /> : <LoginContents />}</>;
};

export default User;
