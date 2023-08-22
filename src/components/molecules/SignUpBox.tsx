import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styled } from 'styled-components';
import { useRecoilState } from 'recoil';
import { signUp } from '../../recoil/Atom';

const SignUp = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 80%;
  height: 50px;
  margin-top: 30px;
`;

const SignUpButton = styled(TouchableOpacity)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid gray;
`;

const SignUpButtonText = styled(Text)`
  color: #4d4c4c;
  font-size: 20px;
`;

const SignUpBox = () => {
  const [, setIsSignUp] = useRecoilState(signUp);

  const handleSignMode = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <SignUp>
      <SignUpButton onPress={handleSignMode}>
        <SignUpButtonText>10초만에 간단하게 회원가입</SignUpButtonText>
      </SignUpButton>
    </SignUp>
  );
};

export default SignUpBox;
