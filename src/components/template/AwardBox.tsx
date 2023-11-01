import React, { useEffect, useState } from 'react';
import { View, FlatList, RefreshControl } from 'react-native'; // FlatList를 import합니다.
import PostBoxes from '../organism/PostBoxes';
import PostBox from '../molecules/PostBox';
import Center from '../atoms/Center';
import TitleBox from '../molecules/TitleBox';
import { useRecoilState } from 'recoil';
import { isUser } from '../../recoil/Atom';
import { get, getDatabase, ref } from 'firebase/database';
import { app } from '../../../firebaseConfig';
import { useFocusEffect } from '@react-navigation/native';

const AwardBox = ({ title, subTitle }: AwardBox) => {
  const [user] = useRecoilState(isUser);
  const [data, setData] = useState<AdviceItem[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      const db = getDatabase(app);
      const dataRef = ref(db, 'contents');
      const snapshot = await get(dataRef);

      if (snapshot.exists()) {
        const userData: { [key: string]: AdviceItem } = snapshot.val();
        const dataArray: AdviceItem[] = Object.values(userData);
        setData(dataArray);
      } else {
        console.log('No data available at the "contents" location');
      }
    } catch (error) {
      console.error('Error getting data from the database', error);
    } finally {
      setRefreshing(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, []),
  );
  const wait = (timeout: number) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchData();

    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <FlatList
      data={[{ key: 'title' }]}
      renderItem={({ item }) => (
        <View>
          <Center>
            <TitleBox
              title={title}
              subTitle={subTitle}
              color={'#50b196'}
              size={25}
            />
          </Center>
          {data && (
            <PostBoxes>
              <PostBox
                icon={'Gold'}
                username={
                  (title === '주간' && data[0] && data[0].username
                    ? data[0].username
                    : title === '월간' && data[3] && data[3].username
                    ? data[3].username
                    : title === '좋아요' &&
                      data[data.length - 1] &&
                      data[data.length - 1].username
                    ? data[6].username
                    : '') as string
                }
                post={
                  (title === '주간' && data[0] && data[0].content
                    ? data[0].content
                    : title === '월간' && data[3] && data[3].content
                    ? data[3].content
                    : title === '좋아요' &&
                      data[data.length - 1] &&
                      data[data.length - 1].content
                    ? data[data.length - 1].content
                    : '') as string
                }
                content={
                  (title === '주간' && data[0] && data[0].response
                    ? data[0].response
                    : title === '월간' && data[3] && data[3].response
                    ? data[3].response
                    : title === '좋아요' &&
                      data[data.length - 1] &&
                      data[data.length - 1].response
                    ? data[data.length - 1].response
                    : '') as string
                }
              />

              <PostBox
                icon={'Silver'}
                username={
                  (title === '주간' && data[1]?.username
                    ? data[1].username
                    : title === '월간' && data[4]?.username
                    ? data[4].username
                    : title === '좋아요' && data[data.length - 2]?.username
                    ? data[data.length - 2].username
                    : '') as string
                }
                post={
                  (title === '주간' && data[1]?.content
                    ? data[1].content
                    : title === '월간' && data[4]?.content
                    ? data[4].content
                    : title === '좋아요' && data[data.length - 2]?.content
                    ? data[data.length - 2].content
                    : '') as string
                }
                content={
                  (title === '주간' && data[1]?.response
                    ? data[1].response
                    : title === '월간' && data[4]?.response
                    ? data[4].response
                    : title === '좋아요' && data[data.length - 2]?.response
                    ? data[data.length - 2].response
                    : '') as string
                }
              />
              <PostBox
                icon={'Bronze'}
                username={
                  (title === '주간' && data[2]?.username
                    ? data[2].username
                    : title === '월간' && data[5]?.username
                    ? data[5].username
                    : title === '좋아요' && data[data.length - 2]?.username
                    ? data[data.length - 2].username
                    : '') as string
                }
                post={
                  (title === '주간' && data[2]?.content
                    ? data[2].content
                    : title === '월간' && data[5]?.content
                    ? data[5].content
                    : title === '좋아요' && data[data.length - 3]?.content
                    ? data[data.length - 3].content
                    : '') as string
                }
                content={
                  (title === '주간' && data[2]?.response
                    ? data[2].response
                    : title === '월간' && data[5]?.response
                    ? data[5].response
                    : title === '좋아요' && data[data.length - 3]?.response
                    ? data[data.length - 3].response
                    : '') as string
                }
              />
            </PostBoxes>
          )}
        </View>
      )}
      keyExtractor={(item) => item.key}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default AwardBox;

type AwardBox = { title: string; subTitle: string };

type AdviceItem = {
  [key: string]: {
    content: string;
    date: string;
    response: string;
  };
};
