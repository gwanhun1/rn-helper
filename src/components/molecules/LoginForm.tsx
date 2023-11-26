import { View, Text } from 'react-native';
import React from 'react';
import LoginInputBox from './LoginInputBox';
import SignUpBox from './SignUpBox';
import LoginIcon from './LoginIcon';

const LoginForm = () => {
  return (
    <>
      <LoginInputBox />
      <LoginIcon />
      <SignUpBox />
    </>
  );
};

export default LoginForm;
