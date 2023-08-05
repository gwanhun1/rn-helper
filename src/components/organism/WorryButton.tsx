import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { styled } from 'styled-components';
import Button from '../atoms/Button';

const Size = styled(View)`
  width: 200px;
  height: 80px;
`;

const WorryForm = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const WorryButton = () => {
  const navigation = useNavigation();

  const MoveStep = () => {
    navigation.navigate('WorryStep1' as never);
  };

  return (
    <WorryForm>
      <Size>
        <Button
          text={'시작하기'}
          fontSize={30}
          bgColor={'#54d2af'}
          onPress={MoveStep}
        />
      </Size>
    </WorryForm>
  );
};

export default WorryButton;
