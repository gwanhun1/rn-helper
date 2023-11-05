import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Accordion from '../atoms/Accordion';
import { Flex as FlexDefault } from '@react-native-material/core';
import PostBox from '../molecules/PostBox';
import Card from '../atoms/Card';
import ListItem from '../atoms/ListItem';
import { useRecoilState } from 'recoil';
import { isUser } from '../../recoil/Atom';

const Flex = styled(FlexDefault)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px;
`;

const SubText = styled(Text)`
  color: #232d3d;
  opacity: 0.5;
  width: 50px;
`;

const LogsItems: React.FC<{ item: LogsItemsType }> = ({ item }) => {
  return (
    <ListItem>
      <Flex>
        <Accordion title={item.content} content={item.response} width={90} />
        <SubText ellipsizeMode="tail" numberOfLines={1}>
          {/* {item.date.slice(0, item.date.length)} */}
        </SubText>
      </Flex>
    </ListItem>
  );
};

export default LogsItems;

interface LogsItemsType {
  content?: string;
  response?: string;
  date: string;
}
