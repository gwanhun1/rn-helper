import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styled } from 'styled-components';

const ButtonBox = styled(View)`
  margin-top: 40px;
`;

const Button = styled(TouchableOpacity)`
  border: 1px solid #50b196;
  padding: 20px;
  border-radius: 30px;
`;

const ButtonText = styled(Text)`
  font-size: 20px;
  color: #3e9b81;
`;

const LoginBox = () => {
  return (
    <ButtonBox>
      <Button>
        <ButtonText>로그인 하러가기</ButtonText>
      </Button>
    </ButtonBox>
  );
};

export default LoginBox;
