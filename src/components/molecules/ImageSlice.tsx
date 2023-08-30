import { View } from 'react-native';
import React from 'react';
import Who from '../atoms/Who';
import How from '../atoms/How';
import { styled } from 'styled-components';
import WhoSe from '../atoms/WhoSe';


const Form = styled(View)`
  margin-top: 10px;
  display:flex;
  height: 60%;
`;

const ImageSlice = () => {
  return (
    <Form>
        <Who />
        <How />
        <WhoSe />
    </Form>
  );
};

export default ImageSlice;
