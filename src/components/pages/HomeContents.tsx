import React, { useEffect } from 'react';
import SafeAreaViews from '../organism/SafeAreaViews';
import Blank from '../atoms/BoxNope';
import { RefreshControl, ScrollView } from 'react-native';
import AwardBox from '../template/AwardBox';
import useRefresh from '../../hooks/useRefresh';
import useGetDate from '../../hooks/useGetDate';
import app from '../../../firebaseConfig';

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

      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#50b196"
            colors={['#50b196']}
          />
        }
      >
        <AwardBox title="주간 " subTitle={weekString} />
        <AwardBox title="월간 " subTitle={monthString} />
        <AwardBox title="좋아요 " subTitle="축하합니다" />
      </ScrollView>
    </>
  );
};

export default HomeContents;
