import { View, Text } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Center from '../atoms/Center';
import { styled } from 'styled-components';
import InfoForm from '../organism/InfoForm';
import InfoBtn from '../organism/InfoBtn';
import UserDescription from '../organism/UserDescription';

const Container = styled(View)`
  width: 90%;
  margin-top: 20px;
`;

const UserContents = () => {
  const [modify, setModify] = useState(false);
  const [formData, setFormData] = useState<UserInfo>({
    id: '',
    password: '',
    username: '',
    grade: '',
  });

  return (
    <>
      <SafeAreaView />
      <Center>
        <Container>
          <InfoForm
            modify={modify}
            formData={formData}
            setFormData={setFormData}
          />
          <InfoBtn setModify={setModify} modify={modify} formData={formData} />
          <UserDescription />
        </Container>
      </Center>
    </>
  );
};

export default UserContents;

export type UserInfo = {
  id: string;
  password: string;
  username: string;
  grade: string;
};
