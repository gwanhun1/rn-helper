import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Center from '../../atoms/Center';
import SafeAreaViewTitle from '../../organism/SafeAreaViewTitle';
import { styled } from 'styled-components';
import Button from '../../atoms/Button';
import { useNavigation } from '@react-navigation/native';
import { Shadow } from 'react-native-shadow-2';
import { SafeAreaView } from 'react-native-safe-area-context';
import AllCenter from '../../atoms/AllCenter';
import { get, getDatabase, push, ref, set } from 'firebase/database';
import { app } from '../../../../firebaseConfig';
import { useRecoilState } from 'recoil';
import { PostContent, isUser } from '../../../recoil/Atom';

const Final = styled(View)`
  height: 100%;
  padding: 20px;
`;

const AdviceText = styled(Text)`
  font-size: 20px;
`;

const ShadowBox = styled(Shadow)`
  width: 100%;
`;

const Five = () => {
  const [user] = useRecoilState(isUser);
  const [content, setContent] = useRecoilState(PostContent);

  const db = getDatabase(app);
  const dataRef = ref(db, `logs/${user.uId}`);
  const dataAllRef = ref(db, `contents`);
  useEffect(() => {
    if (user.uId && content.content && content.response) {
      get(dataRef)
        .then((snapshot) => {
          const newData = {
            content: content.content,
            response: content.response,
            date: new Date().toLocaleDateString(),
            username: user.username ? user.username : 'username',
          };

          if (snapshot.exists()) {
            const existingData = snapshot.val();
            const dataArray = Object.values(existingData);
            const newKey = push(dataRef, newData).key;
            dataArray.push({ ...newData, id: newKey });

            set(dataRef, dataArray);
            push(dataAllRef, newData);
          } else {
            set(dataRef, [newData]);

            push(dataAllRef, newData);
          }
        })
        .catch((error) => {
          console.error('Error getting data from the database', error);
        });
    } else {
      console.log('error');
    }
  }, [user.uId]);

  console.log(content);

  return (
    <View>
      <SafeAreaViewTitle
        title={`조언이 도착했습니다!`}
        color={'#50b196'}
        size={30}
      />
      <ShadowBox>
        <Final>
          <AdviceText>{content.response}</AdviceText>
        </Final>
      </ShadowBox>
    </View>
  );
};

export default Five;
