import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Center from '../atoms/Center';
import Card from '../atoms/Card';
import { styled } from 'styled-components';
import { FontAwesome } from '@expo/vector-icons';
import Button from '../atoms/Button';
import Badge from '../atoms/Badge';
import { Flex } from '@react-native-material/core';
import Accordion from '../atoms/Accordion';
import ListItem from '../atoms/ListItem';

const Container = styled(View)`
  width: 70%;
`;

const InfoText = styled(Text)`
  margin-top: 15px;
  font-size: 20px;
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
  margin-bottom: 20px;
`;

const Box = styled(View)`
  flex: 1;
  flex-direction: 'row';
  padding: 5px;
`;

const RuleText = styled(Text)`
  font-size: 20px;
  color: gray;
`;

const RuleTextUnderline = styled(View)`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  padding-bottom: 3px;
  margin: 20px 0;
`;

const RuleContent = styled(Text)`
  font-size: 10px;
  color: gray;
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
                <Flex direction="row" justify="center" items="center">
                  <InfoText>아이디</InfoText>
                  <Badge color="gray" fontSize={8}>
                    일반회원
                  </Badge>
                </Flex>
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

          <Center>
            <RuleTextUnderline>
              <RuleText>고객센터</RuleText>
            </RuleTextUnderline>
            <RuleContent>정식버전에서 만나보실 수 있습니다.</RuleContent>
            <RuleTextUnderline>
              <RuleText>공지사항</RuleText>
            </RuleTextUnderline>
            <RuleContent>정식버전에서 만나보실 수 있습니다.</RuleContent>
            <RuleTextUnderline>
              <RuleText>1:1 문의</RuleText>
            </RuleTextUnderline>
            <RuleContent>정식버전에서 만나보실 수 있습니다.</RuleContent>
          </Center>
        </Container>
      </Center>
    </>
  );
};

export default UserContents;
