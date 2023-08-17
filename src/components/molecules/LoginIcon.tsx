import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Center from '../atoms/Center';
import { styled } from 'styled-components';

const IconBox = styled(View)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 40%;
`;

const Icon = styled(Image)`
  width: 30px;
  height: 30px;
`;
const IconTextBox = styled(View)`
  margin: 30px 0px;
`;
const IconText = styled(Text)`
  color: #9a9191;
`;

const LoginIcon = () => {
  const google = require('../../../assets/google.png');
  const kakao = require('../../../assets/kakao.png');
  const apple = require('../../../assets/apple.png');

  return (
    <Center>
      <IconTextBox>
        <IconText>구글/카카오/애플로 HELPER 간단하게 시작하기</IconText>
      </IconTextBox>
      <IconBox>
        <TouchableOpacity>
          <Icon source={google} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon source={kakao} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon source={apple} />
        </TouchableOpacity>
      </IconBox>
    </Center>
  );
};

export default LoginIcon;
