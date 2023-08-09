import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styled } from 'styled-components';

const TouchableOpacityBox = styled(TouchableOpacity)<{ bgColor?: string }>`
  background-color: ${(props) => props.bgColor || '#ffffff'};
  width: 100%;
  height: 100%;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled(Text)<{ color?: string; fontSize?: number }>`
  color: ${(props) => props.color || '#ffffff'};
  font-size: ${(props) => props.fontSize || 16};
  font-weight: bold;
`;

const Button = ({ text, color, fontSize, bgColor, onPress }: ButtonType) => {
  return (
    <TouchableOpacityBox bgColor={bgColor} onPress={onPress}>
      <ButtonText color={color} fontSize={fontSize}>
        {text}
      </ButtonText>
    </TouchableOpacityBox>
  );
};

export default Button;

type ButtonType = {
  text: string;
  color?: string;
  fontSize?: number;
  bgColor?: string;
  onPress?: () => void;
};
