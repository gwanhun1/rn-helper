import { View, Text, ScrollView } from 'react-native';
import { useEffect } from 'react';
import { styled } from 'styled-components';
import SafeAreaViewTitle from '../../organism/SafeAreaViewTitle';
import Button from '../../atoms/Button';
import UseNavigate from '../../../hooks/useNavigate';
import { useRecoilState } from 'recoil';
import { PostContent, isUser } from '../../../recoil/Atom';
import { get, getDatabase, ref } from 'firebase/database';
import { app } from '../../../../firebaseConfig';

const Form = styled(View)`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
`;

const Box = styled(View)`
  flex: 1;
  flex-direction: 'row';
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const One = () => {
  const { MoveStep, MoveBack } = UseNavigate({ to: 'WorryStep2' });
  const [content, setContent] = useRecoilState(PostContent);
  const handlePost = async (what: any) => {
    await setContent((prev) => ({ ...prev, oneStep: what }));
    await MoveStep();
  };

  useEffect(
    () => setContent({ oneStep: '', twoStep: '', content: '', response: '' }),
    [],
  );
  const [user, setUser] = useRecoilState(isUser);

  useEffect(() => {
    const db = getDatabase(app);
    const dataRef = ref(db, `users/${user.uId}`);
    get(dataRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          setUser((prev) => ({ ...prev, count: userData.count }));
        } else {
          console.log('No data available at the "users" location');
        }
      })
      .catch((error) => {
        console.error('Error getting data from the database', error);
      });
  }, []);

  return (
    <>
      <SafeAreaViewTitle
        title={`누구에게\n 듣고싶나요??`}
        color={'#50b196'}
        size={30}
      />
      <ScrollView>
        <Form>
          <Box>
            <Button
              text={'아이'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={() => handlePost('아이')}
            />
          </Box>
          <Box>
            <Button
              text={'학생'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={() => handlePost('학생')}
            />
          </Box>
          <Box>
            <Button
              text={'어른'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={() => handlePost('어른')}
            />
          </Box>
        </Form>
        <Form>
          <Box>
            <Button
              text={'할머니'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={() => handlePost('할머니')}
            />
          </Box>
          <Box>
            <Button
              text={'할아버지'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={() => handlePost('할아버지')}
            />
          </Box>
        </Form>
        <Form>
          <Box>
            <Button
              text={'엄마'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={() => handlePost('엄마')}
            />
          </Box>
          <Box>
            <Button
              text={'아빠'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={() => handlePost('아빠')}
            />
          </Box>
          <Box>
            <Button
              text={'강아지'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={() => handlePost('강아지')}
            />
          </Box>
        </Form>
        <Form>
          <Box>
            <Button
              text={'동네 아저씨'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={() => handlePost('동네 아저씨')}
            />
          </Box>
          <Box>
            <Button
              text={'옆집 아줌마'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={() => handlePost('옆집 아줌마')}
            />
          </Box>
        </Form>
        <Form>
          <Box>
            <Button
              text={'외계인'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={() => handlePost('외계인')}
            />
          </Box>
          <Box>
            <Button
              text={'삼촌'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={() => handlePost('삼촌')}
            />
          </Box>
          <Box>
            <Button
              text={'이모'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={() => handlePost('이모')}
            />
          </Box>
        </Form>
        <Form>
          <Box>
            <Button
              text={'동네 백수'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={() => handlePost('동네 백수')}
            />
          </Box>
          <Box>
            <Button
              text={'척척박사'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={() => handlePost('척척박사')}
            />
          </Box>
        </Form>
        <Form>
          <Box>
            <Button
              text={'전문가'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={() => handlePost('전문가')}
            />
          </Box>
          <Box>
            <Button
              text={'T 100%'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={() => handlePost('T 100%')}
            />
          </Box>
          <Box>
            <Button
              text={'박찬호'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={() => handlePost('박찬호')}
            />
          </Box>
        </Form>
        <Form>
          <Box>
            <Button
              text={'심리상담사'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={() => handlePost('심리상담사')}
            />
          </Box>
          <Box>
            <Button
              text={'뒤로가기'}
              fontSize={20}
              bgColor={'lightgray'}
              onPress={MoveBack}
            />
          </Box>
        </Form>
      </ScrollView>
    </>
  );
};

export default One;
