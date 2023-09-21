import React, { useEffect, useState } from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import PostBoxes from '../organism/PostBoxes';
import PostBox from '../molecules/PostBox';
import Center from '../atoms/Center';
import TitleBox from '../molecules/TitleBox';
import { useRecoilState } from 'recoil';
import { isUser } from '../../recoil/Atom';
import { get, getDatabase, ref } from 'firebase/database';
import app from '../../../firebaseConfig';

const AwardBox = ({ title, subTitle }: AwardBox) => {
  const [user] = useRecoilState(isUser);
  const [data, setData] = useState<AdviceItem[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = () => {
    const db = getDatabase(app);
    const dataRef = ref(db, `contents`);
    get(dataRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const userData: { [key: string]: AdviceItem } = snapshot.val();
          const dataArray: AdviceItem[] = Object.values(userData);
          setData(dataArray);
        } else {
          console.log('No data available at the "contents" location');
        }
      })
      .catch((error) => {
        console.error('Error getting data from the database', error);
      })
      .finally(() => {
        setRefreshing(false); // 새로고침 완료 후 refreshing 상태를 false로 변경
      });
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  const onRefresh = () => {
    setRefreshing(true); // 새로고침 시작 시 refreshing 상태를 true로 변경
    fetchData();
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
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
              data[0]?.username && typeof data[0]?.username === 'string'
                ? data[0].username
                : ''
            }
            post={typeof data[0]?.content === 'string' ? data[0].content : ''}
            content={
              typeof data[0]?.response === 'string' ? data[0].response : ''
            }
          />
          <PostBox
            icon={'Silver'}
            username={
              typeof data[1]?.username === 'string' ? data[1].username : ''
            }
            post={typeof data[1]?.content === 'string' ? data[1].content : ''}
            content={
              typeof data[1]?.response === 'string' ? data[1].response : ''
            }
          />
          <PostBox
            icon={'Bronze'}
            username={
              typeof data[2]?.username === 'string' ? data[2].username : ''
            }
            post={typeof data[2]?.content === 'string' ? data[2].content : ''}
            content={
              typeof data[2]?.response === 'string' ? data[2].response : ''
            }
          />
        </PostBoxes>
      )}
    </ScrollView>
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
