import React from 'react';
import { SafeAreaView as SafeAreaViewDefault } from 'react-native-safe-area-context';
import { styled } from 'styled-components';
import Center from '../atoms/Center';
import TitleBox from '../molecules/TitleBox';

const SafeAreaView = styled(SafeAreaViewDefault)`
  background-color: #50b196;
  padding-bottom: 0px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

const SafeAreaViews = ({ title, subTitle, color }: SafeAreaViewsProps) => {
  return (
    <SafeAreaView>
      <Center>
        {subTitle && (
          <TitleBox title={title} subTitle={subTitle} color={color} />
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
