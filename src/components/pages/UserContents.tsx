import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Center from '../atoms/Center';
import { styled } from 'styled-components';
import InfoForm from '../organism/InfoForm';
import InfoBtn from '../organism/InfoBtn';
import UserDescription from '../organism/UserDescription';

const Container = styled(View)`
  width: 90%;
`;

const UserContents = () => {
  const [modify, setModify] = useState(false);

  return (
    <>
      <SafeAreaView />
      <Center>
        <Container>
          <InfoForm modify={modify} />
          <InfoBtn setModify={setModify} />
          <UserDescription />
        </Container>
      </Center>
    </>
  );
};

export default UserContents;
