import React from 'react';
import ImageSlice from '../../components/molecules/ImageSlice';
import SafeAreaViewTitle from '../../components/organism/SafeAreaViewTitle';
import WorryButton from '../organism/WorryButton';

const WorryContents = () => {
  return (
    <>
      <SafeAreaViewTitle title={'어떤 조언을 듣고싶나요?'} color={'#50b196'} />

      <ImageSlice />

      <WorryButton />
    </>
  );
};

export default WorryContents;
