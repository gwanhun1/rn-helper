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
