import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useState } from 'react';
import Center from '../atoms/Center';
import { styled } from 'styled-components';
import LoginIcon from '../molecules/LoginIcon';
import LoginInputBox from '../molecules/LoginInputBox';
import SignUpBox from '../molecules/SignUpBox';

const LogoBox = styled(View)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Logo = styled(Text)`
  font-weight: bold;
  font-size: 50px;
  color: #50b196;
`;

const LoginForm = () => {
  return (
    <Center>
      <LogoBox>
        <Logo>HELPER</Logo>
      </LogoBox>

      <LoginInputBox />

      <LoginIcon />

      <SignUpBox />
    </Center>
  );
};

export default LoginForm;
