import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import { login, signUp } from '../../recoil/Atom';
import { useRecoilState } from 'recoil';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';

const IDInput = styled(TextInput)`
  width: 80%;
  height: 54px;
  padding: 10px;
  border: 1px solid lightgray;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #fff;
`;

const PWInput = styled(TextInput)`
  width: 80%;
  height: 54px;
  padding: 10px;
  border: 1px solid lightgray;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #fff;
`;

const InputBox = styled(View)`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlexBox = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 80%;
  height: 50px;
`;

const Button = styled(TouchableOpacity)`
  background-color: #50b196;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const ButtonText = styled(Text)`
  color: #fff;
  font-size: 20px;
`;

const ResetText = styled(Text)`
  color: gray;
`;

const Reset = styled(TouchableOpacity)`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(View)`
  height: 30px;
`;

const LoginInputBox = () => {
  const navigation = useNavigation();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    setIsLogin((prev) => !prev);
    navigation.navigate('Home' as never);

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        userName,
        password,
      );

      console.log(user);
    } catch (e) {
      console.log(e);
    }
  };
  const [isSignUp] = useRecoilState(signUp);

  const [, setIsLogin] = useRecoilState(login);

  return (
    <InputBox>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <IDInput
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
          placeholder={'아이디 입력해주세요.'}
        />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <PWInput
          value={password}
          onChangeText={setPassword}
          placeholder={'비밀번호를 입력해주세요.'}
        />
      </TouchableWithoutFeedback>

      {false ? (
        <FlexBox>
          <Reset>
            <ResetText>아이디 찾기</ResetText>
          </Reset>
          <Reset>
            <ResetText>비밀번호 찾기</ResetText>
          </Reset>
        </FlexBox>
      ) : (
        <Box />
      )}
      <FlexBox>
        <Button>
          <ButtonText
            onPress={isSignUp ? () => console.log('회원가입') : handleLogin}
          >
            {isSignUp ? '회원가입' : '로그인'}
          </ButtonText>
        </Button>
      </FlexBox>
    </InputBox>
  );
};

export default LoginInputBox;
