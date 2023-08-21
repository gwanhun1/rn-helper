import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled } from 'styled-components';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import LoginArea from '../organism/LoginArea';

const CenterBox = styled(View)`
  width: 100%;
  padding-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: lightgray;
`;

const TopMenu = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled(View)`
  width: 40px;
  text-align: center;
`;

const LoginContents = () => {
  const navigation = useNavigation();

  const handleExit = () => {
    navigation.navigate('Home' as never);
  };
  return (
    <SafeAreaView>
      <CenterBox>
        <TopMenu>
          <Box />
          <Text>로그인</Text>
          <Box>
            <TouchableOpacity onPress={handleExit}>
              <AntDesign name="closecircleo" size={20} color="gray" />
            </TouchableOpacity>
          </Box>
        </TopMenu>
      </CenterBox>

      <LoginArea />
    </SafeAreaView>
  );
};

export default LoginContents;
