import { View, Text } from 'react-native';
import React from 'react';
import Card from '../atoms/Card';
import { FontAwesome } from '@expo/vector-icons';
import Badge from '../atoms/Badge';
import { Flex } from '@react-native-material/core';
import { styled } from 'styled-components';
import Center from '../atoms/Center';

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

const InfoForm = () => {
  return (
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
  );
};

export default InfoForm;
