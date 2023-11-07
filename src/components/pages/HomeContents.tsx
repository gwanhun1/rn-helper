import { useCallback, useEffect, useState } from 'react';
import SafeAreaViews from '../organism/SafeAreaViews';
import Blank from '../atoms/BoxNope';
import { FlatList, RefreshControl, ScrollView } from 'react-native';
import AwardBox from '../template/AwardBox';
import useRefresh from '../../hooks/useRefresh';
import useGetDate from '../../hooks/useGetDate';

import { useRecoilState } from 'recoil';
import { isUser } from '../../recoil/Atom';

const HomeContents = () => {
  const { refreshing, onRefresh } = useRefresh();
  const { monthString, weekString } = useGetDate();
  const [user] = useRecoilState(isUser);

  return (
    <>
      <SafeAreaViews
        title={'오늘의 조언'}
        subTitle={'오늘의 조언은 무엇일까요?'}
        color={'#fff'}
      />

      <Blank height={20} />

      <FlatList
        data={['주간', '월간', '좋아요']}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#50b196"
            colors={['#50b196']}
          />
        }
        renderItem={({ item }) => (
          <AwardBox
            title={item}
            subTitle={
              item === '주간'
                ? weekString
                : item === '월간'
                ? monthString
                : '축하합니다'
            }
          />
        )}
        keyExtractor={(item) => item}
      />
    </>
  );
};

export default HomeContents;
