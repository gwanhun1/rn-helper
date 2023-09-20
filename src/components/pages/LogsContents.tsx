import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, RefreshControl } from 'react-native';
import styled from 'styled-components/native';
import LogsItems from '../organism/LogsItems';
import SafeAreaViews from '../organism/SafeAreaViews';
import useRefresh from '../../hooks/useRefresh';
import { useRecoilState } from 'recoil';
import { isUser, login } from '../../recoil/Atom';
import app from '../../../firebaseConfig';
import { get, getDatabase, ref } from 'firebase/database';

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

  const [user] = useRecoilState(isUser);
  const [data, setData] = useState([]);
  const db = getDatabase(app);
  const dataRef = ref(db, `logs/${user.uId}`);
  useEffect(() => {
    if (isLogin) {
      get(dataRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const userData = snapshot.val();

            // const reversedData = Object.values(userData).reverse();
            setData(userData);
          } else {
            console.log('No data available at the "logs" location');
          }
        })
        .catch((error) => {
          console.error('Error getting data from the database', error);
        });
    } else {
      setData([]);
    }
  }, [user, refreshing]);

  const renderItem: React.FC<{ item: LogItem }> = ({ item }) => {
    return <LogsItems item={item} />;
  };

  const [isLogin] = useRecoilState(login);

  console.log(data);

  return (
    <>
      <SafeAreaViews
        title={'조언 리스트'}
        subTitle={'고민은 새로운 해결책을 \n 탐색하는 첫 걸음입니다.'}
        color={'white'}
      />
      <Container>
        {data.length > 0 ? (
          <FlatListContent<any>
            data={data.filter((item) => item)}
            renderItem={renderItem}
            keyExtractor={(item: any, index: { toString: () => any }) =>
              index.toString()
            }
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                tintColor="#50b196"
                colors={['#50b196']}
              />
            }
          />
        ) : (
          <EmptyText>텅...</EmptyText>
        )}
      </Container>
    </>
  );
};

export default LogsContents;

type LogItem = {
  id: number;
  date: string;
  text: string;
};
