import { View, Text } from 'react-native';
import { ReactNode } from 'react';
import { Flex } from '@react-native-material/core';

const AllCenter = ({ children }: CenterProps) => {
  return (
    <Flex justify="center" items="center" w={'100%'} h={'100%'}>
      {children}
    </Flex>
  );
};

export default AllCenter;

type CenterProps = {
  children: ReactNode;
};
