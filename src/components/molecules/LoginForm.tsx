import { View, Text } from 'react-native';
import React from 'react';
import LoginInputBox from './LoginInputBox';
import LoginIcon from './LoginIcon';
import SignUpBox from './SignUpBox';

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
