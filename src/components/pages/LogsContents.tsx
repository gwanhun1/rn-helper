import React from 'react';
import { Text, View, StyleSheet, FlatList, RefreshControl } from 'react-native';
import styled from 'styled-components/native';
import LogsItems from '../organism/LogsItems';
import SafeAreaViews from '../organism/SafeAreaViews';
import useRefresh from '../../hooks/useRefresh';

const Container = styled(View)`
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
`;

const EmptyText = styled(Text)`
  font-size: 40px;
  font-weight: bold;
  color: #50b196;
`;

const FlatListContent = styled(FlatList)<LogItem>`
  margin-top: 5px;
  width: 100%;
`;

const LogsContents: React.FC = () => {
  const { refreshing, onRefresh } = useRefresh();

  const renderItem: React.FC<{ item: LogItem }> = ({ item }) => {
    return <LogsItems item={item} />;
  };

  return (
    <>
      <SafeAreaViews
        title={'조언 리스트'}
        subTitle={'고민은 새로운 해결책을 \n 탐색하는 첫 걸음입니다.'}
        color={'white'}
      />
      <Container>
        {INITDATA.length === 0 ? (
          <EmptyText>텅...</EmptyText>
        ) : (
          <FlatListContent<any>
            data={INITDATA}
            renderItem={renderItem}
            keyExtractor={(item: any) => item.id.toString()}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                tintColor="#50b196"
                colors={['#50b196']}
              />
            }
          />
        )}
      </Container>
    </>
  );
};

export default LogsContents;

const INITDATA: LogItem[] = [
  { id: 0, date: 'aaa', text: '111' },
  { id: 1, date: 'bbb', text: '222' },
  { id: 2, date: 'ccc', text: '333' },
  { id: 3, date: 'ddd', text: '444' },
  { id: 4, date: 'eee', text: '555' },
  { id: 5, date: 'hhh', text: '555' },
  { id: 6, date: 'ggg', text: '555' },
  { id: 7, date: 'ddd', text: '555' },
  { id: 8, date: 'www', text: '555' },
];

type LogItem = {
  id: number;
  date: string;
  text: string;
};
