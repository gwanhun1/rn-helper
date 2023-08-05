import { View } from 'react-native';
import React from 'react';
import Who from '../atoms/Who';
import How from '../atoms/How';
import { styled } from 'styled-components';

const SliceForm = styled(View)`
  flex: 2;
  justify-content: center;
`;

const Form = styled(View)`
  flex: 1;
  justify-content: center;
  margin-top: 50px;
`;

const ImageSlice = () => {
  return (
    <Form>
      <SliceForm>
        <Who />
        <How />
      </SliceForm>
    </Form>
  );
};

export default ImageSlice;
