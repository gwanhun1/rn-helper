import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { isUser, login, signUp } from '../../recoil/Atom';
import { useRecoilState } from 'recoil';
import { useNavigation } from '@react-navigation/native';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { app, auth } from '../../../firebaseConfig';
import { get, getDatabase, ref, update } from 'firebase/database';

const IDInput = styled(TextInput)`
  width: 80%;
  height: 54px;
  padding: 10px;
  border: 1px solid lightgray;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #fff;
`;

const PWInput = styled(TextInput)`
  width: 80%;
  height: 54px;
  padding: 10px;
  border: 1px solid lightgray;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #fff;
`;

const InputBox = styled(View)`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlexBox = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 80%;
  height: 50px;
`;

const Button = styled(TouchableOpacity)`
  background-color: #50b196;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const ButtonText = styled(Text)`
  color: #fff;
  font-size: 20px;
`;

const ResetText = styled(Text)`
  color: gray;
`;

const Reset = styled(TouchableOpacity)`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(View)`
  height: 30px;
`;

const LoginInputBox = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [isSignUp] = useRecoilState(signUp);
  const [user, setUser] = useRecoilState<any>(isUser);
  const [, setIsLogin] = useRecoilState(login);

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userName,
        password,
      );
      await navigation.navigate('Home' as never);
      await alert('환영합니다 🎉');
      await handleLogin();

      console.log('Signup success:', userCredential.user);
      // Add any navigation or success logic here
    } catch (e) {
      console.error('Signup error:', e);
      alert('회원가입에 실패하셨습니다.');
    }
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userName,
        password,
      );
      const user = await userCredential.user;
      const userId = await user.uid;

      const db = getDatabase(app);
      const dataRef = ref(db, `users/${userId}`);

      await setIsLogin(true);
      await navigation.navigate('Home' as never);
      await update(dataRef, {
        loginDate: new Date().toLocaleDateString(),
        count: 3,
        password: password,
        id: userName,
        grade: '',
      });
      await SaveInfo(userId);
    } catch (e) {
      console.error('Login error:', e);
      alert('로그인 정보를 다시 입력해주세요.');
    }
  };
  const SaveInfo = (userId: any) => {
    const db = getDatabase(app);
    const dataRef = ref(db, `users/${userId}`);

    get(dataRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();

          setUser({
            username: userData.username,
            id: userData.id,
            password: userData.password,
            grade: userData.grade,
            loginDate: userData.loginDate,
            uId: userId,
            count:
              new Date().toLocaleDateString() !== userData.loginDate
                ? userData.count
                : user.count,
          });
        } else {
          console.log('No data available at the "users" location');
        }
      })
      .catch((error) => {
        console.error('Error getting data from the database', error);
      });
  };
  return (
    <InputBox>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <IDInput
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
          placeholder={'아이디 입력해주세요.'}
          keyboardType="email-address"
        />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <PWInput
          value={password}
          onChangeText={setPassword}
          placeholder={'비밀번호를 입력해주세요.'}
          secureTextEntry
        />
      </TouchableWithoutFeedback>

      {false ? (
        <FlexBox>
          <Reset>
            <ResetText>아이디 찾기</ResetText>
          </Reset>
          <Reset>
            <ResetText>비밀번호 찾기</ResetText>
          </Reset>
        </FlexBox>
      ) : (
        <Box />
      )}
      <FlexBox>
        <Button onPress={isSignUp ? handleSignup : handleLogin}>
          <ButtonText>{isSignUp ? '회원가입' : '로그인'}</ButtonText>
        </Button>
      </FlexBox>
    </InputBox>
  );
};

export default LoginInputBox;

// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Keyboard,
//   TouchableWithoutFeedback,
//   TextInput,
// } from 'react-native';
// import { useEffect, useState } from 'react';
// import { styled } from 'styled-components';
// import { isUser, login, signUp } from '../../recoil/Atom';
// import { useRecoilState } from 'recoil';
// import { useNavigation } from '@react-navigation/native';

// const IDInput = styled(TextInput)`
//   width: 80%;
//   height: 54px;
//   padding: 10px;
//   border: 1px solid lightgray;
//   border-top-left-radius: 10px;
//   border-top-right-radius: 10px;
//   background-color: #fff;
// `;

// const PWInput = styled(TextInput)`
//   width: 80%;
//   height: 54px;
//   padding: 10px;
//   border: 1px solid lightgray;
//   border-bottom-left-radius: 10px;
//   border-bottom-right-radius: 10px;
//   background-color: #fff;
// `;

// const InputBox = styled(View)`
//   margin-top: 20px;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const FlexBox = styled(View)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: row;
//   width: 80%;
//   height: 50px;
// `;

// const Button = styled(TouchableOpacity)`
//   background-color: #50b196;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 5px;
// `;

// const ButtonText = styled(Text)`
//   color: #fff;
//   font-size: 20px;
// `;

// const ResetText = styled(Text)`
//   color: gray;
// `;

// const Reset = styled(TouchableOpacity)`
//   width: 100px;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Box = styled(View)`
//   height: 30px;
// `;

// const LoginInputBox = () => {
//   const navigation = useNavigation();
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');

//   const [isSignUp] = useRecoilState(signUp);
//   const [user, setUser] = useRecoilState<any>(isUser);
//   const [, setIsLogin] = useRecoilState(login);

//   const handleSignup = async () => {};

//   const handleLogin = async () => {};
//   const SaveInfo = (userId: any) => {};
//   return (
//     <InputBox>
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <IDInput
//           value={userName}
//           onChangeText={(userName) => setUserName(userName)}
//           placeholder={'아이디 입력해주세요.'}
//           keyboardType="email-address"
//         />
//       </TouchableWithoutFeedback>

//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <PWInput
//           value={password}
//           onChangeText={setPassword}
//           placeholder={'비밀번호를 입력해주세요.'}
//           secureTextEntry
//         />
//       </TouchableWithoutFeedback>

//       {false ? (
//         <FlexBox>
//           <Reset>
//             <ResetText>아이디 찾기</ResetText>
//           </Reset>
//           <Reset>
//             <ResetText>비밀번호 찾기</ResetText>
//           </Reset>
//         </FlexBox>
//       ) : (
//         <Box />
//       )}
//       <FlexBox>
//         <Button onPress={isSignUp ? handleSignup : handleLogin}>
//           <ButtonText>{isSignUp ? '회원가입' : '로그인'}</ButtonText>
//         </Button>
//       </FlexBox>
//     </InputBox>
//   );
// };

// export default LoginInputBox;
