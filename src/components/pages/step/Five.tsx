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
import { getDatabase, ref, set } from 'firebase/database';
import app from '../../../../firebaseConfig';
import { useRecoilState } from 'recoil';
import { isUser } from '../../../recoil/Atom';

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

  const text = '';
  const db = getDatabase(app);
  const dataRef = ref(db, `contents/${user.uId}`);
  const handlePost = async () => {
    if (user.uId) {
      await set(dataRef, { content: text });
    } else {
      console.log('error');
    }
  };

  return (
    <View>
      <SafeAreaViewTitle
        title={`조언이 도착했습니다!`}
        color={'#50b196'}
        size={30}
      />
      <ShadowBox>
        <Final>
          <AdviceText>Five</AdviceText>
        </Final>
      </ShadowBox>
    </View>
  );
};

export default Five;
