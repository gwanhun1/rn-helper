import React from 'react';
import Button from '../atoms/Button';
import { styled } from 'styled-components';
import { Alert, View } from 'react-native';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isUser, login } from '../../recoil/Atom';
import { signOut } from 'firebase/auth';
import app, { auth } from '../../../firebaseConfig';
import { getDatabase, ref, set, update } from 'firebase/database';
import { UserInfo } from '../pages/UserContents';

const Form = styled(View)`
  width: 100%;
  height: 60px;
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

const InfoBtn = ({
  setModify,
  setFormData,
  formData,
  modify,
}: InfoBtnProps) => {
  const [user, setUser] = useRecoilState<any>(isUser);

  const handleModify = () => {
    const db = getDatabase(app);
    const dataRef = ref(db, `users/${user.uId}`);

    if (modify) {
      Alert.alert(
        '저장',
        '정말로 저장하시겠습니까?',
        [
          {
            text: '취소',
            onPress: () => {
              setModify(false);
            },
            style: 'cancel',
          },
          {
            text: '저장',
            onPress: () => {
              update(dataRef, {
                username: formData.username,
              })
                .then(() => {
                  setModify((prev) => !prev);
                  console.log('Data successfully written to the database');
                })
                .catch((error: any) => {
                  console.error('Error writing data to the database', error);
                });
            },
            style: 'destructive',
          },
        ],
        {
          cancelable: true,
          onDismiss: () => {},
        },
      );
    } else {
      setModify((prev) => !prev);
    }
  };

  const [isLogin, setIsLogin] = useRecoilState(login);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setIsLogin(false);
      setUser({
        displayName: null,
        email: '',
        phoneNumber: null,
        photoURL: null,
        providerId: '',
        uid: '',
      });
    });
  };

  return (
    <Form>
      <Box>
        <Button
          text={'회원정보 수정'}
          fontSize={15}
          bgColor={'#54d2af'}
          onPress={handleModify}
        />
      </Box>
      <Box>
        <Button
          text={'로그아웃'}
          fontSize={15}
          bgColor={'#54d2af'}
          onPress={handleSignOut}
        />
      </Box>
    </Form>
  );
};

export default InfoBtn;

type InfoBtnProps = {
  setModify: React.Dispatch<React.SetStateAction<boolean>>;
  setFormData: any;
  formData: UserInfo;
  modify: boolean;
};
