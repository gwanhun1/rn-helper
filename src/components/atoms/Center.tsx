import { View, Text } from 'react-native';
import React, { ReactNode } from 'react';
import { Flex } from '@react-native-material/core';

const Center = ({ children }: CenterProps) => {
  return (
    <Flex justify="center" items="center" w={'100%'}>
      {children}
    </Flex>
  );
};

export default Center;

type CenterProps = {
  children: ReactNode;
};
