import { View, Text } from 'react-native';
import React from 'react';
import LoginInputBox from './LoginInputBox';
import LoginIcon from './LoginIcon';
import LoginBox from './LoginBox';

const SignupForm = () => {
  return (
    <>
      <LoginInputBox />
      <LoginIcon />
      <LoginBox />
    </>
  );
};

export default SignupForm;
