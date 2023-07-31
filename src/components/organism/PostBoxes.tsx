import { View as ViewDefault } from 'react-native';
import React from 'react';
import { styled } from 'styled-components';
import Center from '../atoms/Center';

const View = styled(ViewDefault)`
  margin: 10px;
  border-radius: 10px;
  background-color: #ffffff90;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  elevation: 3;
  margin-bottom: 20px;
`;

const PostBoxes = ({ children }: any) => {
  return (
    <View>
      <Center>{children}</Center>
    </View>
  );
};

export default PostBoxes;
