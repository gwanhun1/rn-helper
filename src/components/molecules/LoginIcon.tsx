import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Center from '../atoms/Center';
import { styled } from 'styled-components';
import Google from '../../../assets/google.svg';
import Kakao from '../../../assets/kakao.svg';
import Apple from '../../../assets/apple.svg';

const IconBox = styled(View)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 50%;
`;

const IconTextBox = styled(View)`
  margin: 30px 0px;
`;
const IconText = styled(Text)`
  color: #9a9191;
`;

const LoginIcon = () => {
  return (
    <Center>
      <IconTextBox>
        <IconText>구글/카카오/애플로 HELPER 간단하게 시작하기</IconText>
      </IconTextBox>

      <IconBox>
        {/* <TouchableOpacity>
        <Google viewBox="0 0 450 600" width={50} height={50}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Kakao viewBox="0 0 450 600" width={50} height={50}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Apple viewBox="0 0 450 600" width={50} height={50}/>
        </TouchableOpacity> */}
      </IconBox>
    </Center>
  );
};

export default LoginIcon;
