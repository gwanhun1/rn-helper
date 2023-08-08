import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Center from '../atoms/Center';
import Card from '../atoms/Card';
import { styled } from 'styled-components';
import { FontAwesome } from '@expo/vector-icons';
import Button from '../atoms/Button';

const Container = styled(View)`
  width: 70%;
`;

const InfoText = styled(Text)`
  margin-top: 15px;
  font-size: 20;
`;

const TextBox = styled(View)`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled(View)`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const Box = styled(View)`
  flex: 1;
  flex-direction: 'row';
  padding: 5px;
`;

const UserContents = () => {
  return (
    <>
      <SafeAreaView />
      <Center>
        <Container>
          <Card>
            <Center>
              <FontAwesome name="user-circle" size={120} color="gray" />
              <TextBox>
                <InfoText>아이디</InfoText>
                <InfoText>이름</InfoText>
              </TextBox>
            </Center>
          </Card>
          <Form>
            <Box>
              <Button
                text={'회원정보 수정'}
                fontSize={15}
                bgColor={'#54d2af'}
                //   onPress={'MoveStep'}
              />
            </Box>
            <Box>
              <Button
                text={'로그아웃'}
                fontSize={15}
                bgColor={'#54d2af'}
                //   onPress={'MoveStep'}
              />
            </Box>
          </Form>
        </Container>
      </Center>
    </>
  );
};

export default UserContents;
