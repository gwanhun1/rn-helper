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
import { get, getDatabase, push, ref, set, update } from 'firebase/database';
import { app } from '../../../../firebaseConfig';
import { useRecoilState } from 'recoil';
import { PostContent, isUser } from '../../../recoil/Atom';
import { hasBadWords } from '../../../hooks/filtering';

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
  const [user, setUser] = useRecoilState(isUser);
  const [content, setContent] = useRecoilState(PostContent);
  const db = getDatabase(app);
  const dataRef = ref(db, `logs/${user.uId}`);
  const dataUserRef = ref(db, `users/${user.uId}`);
  const dataAllRef = ref(db, `contents`);

  useEffect(() => {
    if (
      user.uId &&
      content.content &&
      content.response &&
      hasBadWords(content.content)
    ) {
      const newData = {
        content: content.content,
        response: content.response,
        date: new Date().toLocaleDateString(),
        username: user.username ? user.username : '별명이 없습니다.',
      };

      const dataRefPromise = get(dataRef);
      const dataUserRefPromise = get(dataUserRef);

      Promise.all([dataRefPromise, dataUserRefPromise])
        .then(([dataRefSnapshot, dataUserRefSnapshot]) => {
          if (dataRefSnapshot.exists()) {
            const existingData = dataRefSnapshot.val();
            const dataArray = Object.values(existingData);
            const newKey = push(dataRef, newData).key;
            dataArray.push({ ...newData, id: newKey });
            set(dataRef, dataArray);
          } else {
            set(dataRef, [newData]);
          }

          if (dataUserRefSnapshot.exists()) {
            const userData = dataUserRefSnapshot.val();
          } else {
            console.log('No data available at the "users" location');
          }

          push(dataAllRef, newData);
        })
        .catch((error) => {
          console.error('Error while interacting with the database', error);
        });
    } else {
      console.log('error');
    }
  }, []);

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
