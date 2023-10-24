import { View, Text } from 'react-native';
import { useState } from 'react';
import Center from '../atoms/Center';
import { styled } from 'styled-components';
import LoginForm from '../molecules/LoginForm';
import SignupForm from '../molecules/SignupForm';
import { useRecoilState } from 'recoil';
import { signUp } from '../../recoil/Atom';

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

const LoginArea = () => {
  const [isSignUp] = useRecoilState(signUp);

  return (
    <Center>
      <LogoBox>
        <Logo>HELPER</Logo>
      </LogoBox>

      {isSignUp ? <SignupForm /> : <LoginForm />}
    </Center>
  );
};

export default LoginArea;
