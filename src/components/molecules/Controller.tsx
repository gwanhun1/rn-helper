import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { styled } from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';

const ControllerBox = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const IconBox = styled(TouchableOpacity)`
  padding: 30px;
`;

const Controller = () => {
  return (
    <ControllerBox>
      <IconBox>
        <Entypo name="arrow-with-circle-left" size={30} color="#50b196" />
      </IconBox>
      <IconBox>
        <Entypo name="arrow-with-circle-right" size={30} color="#50b196" />
      </IconBox>
    </ControllerBox>
  );
};

export default Controller;
