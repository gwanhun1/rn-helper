import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Accordion from '../atoms/Accordion';
import { Flex as FlexDefault } from '@react-native-material/core';
import PostBox from '../molecules/PostBox';

type LogItem = {
  id: number;
  date: string;
  text: string;
};

const Flex = styled(FlexDefault)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px;
  margin-vertical: 5px;
  margin-horizontal: 5px;
  border-radius: 10px;
  background-color: white;
  shadow-color: #000;
  shadow-offset: {
    width: 1px;
    height: 1px;
  }
  shadow-opacity: 0.05;
  shadow-radius: 3.14px;
  elevation: 2;
`;

const LogsItems: React.FC<{ item: LogItem }> = ({ item }) => {
  return (
    <Flex>
      <Accordion title={'post'} content="11111" />
    </Flex>
  );
};

export default LogsItems;
