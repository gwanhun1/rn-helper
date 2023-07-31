import React from 'react';
import SafeAreaViews from '../organism/SafeAreaViews';
import Blank from '../atoms/BoxNope';
import { ScrollView } from 'react-native';
import AwardBox from '../template/AwardBox';

const HomeContents = () => {
  return (
    <>
      <SafeAreaViews
        title={'오늘의 명언'}
        subTitle={'오늘의 명언은 무엇일까요?'}
        color={'#e2dfdf'}
      />

      <Blank height={30} />
      <ScrollView>
        <AwardBox title="주간 " subTitle="7월 4주차" />
        <AwardBox title="월간 " subTitle="7월" />
        <AwardBox title="좋아요 " subTitle="축하합니다" />
      </ScrollView>
    </>
  );
};

export default HomeContents;
