import React from 'react';
import Button from '../atoms/Button';
import { styled } from 'styled-components';
import { View } from 'react-native';
import { useRecoilState } from 'recoil';
import { isUser, login } from '../../recoil/Atom';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';

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

const InfoBtn = ({ setModify }: InfoBtnProps) => {
  const handleModify = () => {
    setModify((prev) => !prev);
  };

  const [isLogin, setIsLogin] = useRecoilState(login);
  const [user, setUser] = useRecoilState<any>(isUser);

  const handleSignOut = () => {
    setIsLogin(false);
    signOut(auth);
    setUser({
      displayName: null,
      email: '',
      phoneNumber: null,
      photoURL: null,
      providerId: '',
      uid: '',
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
};
