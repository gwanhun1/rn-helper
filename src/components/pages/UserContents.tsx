import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Center from '../atoms/Center';
import { styled } from 'styled-components';
import InfoForm from '../organism/InfoForm';
import InfoBtn from '../organism/InfoBtn';
import UserDescription from '../organism/UserDescription';

const Container = styled(View)`
  width: 70%;
`;

const UserContents = () => {
  return (
    <>
      <SafeAreaView />
      <Center>
        <Container>
          <InfoForm />
          <InfoBtn />
          <UserDescription />
        </Container>
      </Center>
    </>
  );
};

export default UserContents;
