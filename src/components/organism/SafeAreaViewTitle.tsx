import React from 'react';
import { SafeAreaView as SafeAreaViewDefault } from 'react-native-safe-area-context';
import { styled } from 'styled-components';
import Center from '../atoms/Center';
import TitleBox from '../molecules/TitleBox';

const SafeAreaView = styled(SafeAreaViewDefault)<{ fontSize?: number }>`
  padding-bottom: 0px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

const SafeAreaViewTitle = ({ title, color, size }: SafeAreaViewTitleProps) => {
  return (
    <SafeAreaView>
      <Center>
        <TitleBox title={title} color={color} size={size} />
      </Center>
    </SafeAreaView>
  );
};

export default SafeAreaViewTitle;

type SafeAreaViewTitleProps = {
  title: string;
  color?: string;
  size?: number;
};
