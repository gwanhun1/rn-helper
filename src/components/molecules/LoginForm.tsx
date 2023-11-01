import { View, Text } from 'react-native';
import React from 'react';
import LoginInputBox from './LoginInputBox';
import SignUpBox from './SignUpBox';

const LoginForm = () => {
  return (
    <>
      <LoginInputBox />
      <SignUpBox />
    </>
  );
};

export default LoginForm;
