import React from 'react';
import { SafeAreaView as SafeAreaViewDefault } from 'react-native-safe-area-context';
import { styled } from 'styled-components';
import Center from '../atoms/Center';
import TitleBox from '../molecules/TitleBox';
import TitleBoxName from '../molecules/TitleBoxName';

const SafeAreaView = styled(SafeAreaViewDefault)`
  background-color: #50b196;
  padding-bottom: 0px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const SafeAreaViews = ({ title, subTitle, color }: SafeAreaViewsProps) => {
  return (
    <SafeAreaView>
      <Center>
        {subTitle && (
          <TitleBoxName title={title} subTitle={subTitle} color={color} />
        )}
      </Center>
    </SafeAreaView>
  );
};

export default SafeAreaViews;

type SafeAreaViewsProps = {
  title: string;
  subTitle?: string;
  color?: string;
};
