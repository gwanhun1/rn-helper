import React, { useEffect } from 'react';
import ImageSlice from '../../components/molecules/ImageSlice';
import SafeAreaViewTitle from '../../components/organism/SafeAreaViewTitle';
import WorryButton from '../organism/WorryButton';
import { getDatabase, ref, update } from 'firebase/database';
import { app } from '../../../firebaseConfig';
import { useRecoilState } from 'recoil';
import { isUser } from '../../recoil/Atom';

const WorryContents = () => {
  const [user] = useRecoilState(isUser);

  const db = getDatabase(app);

  const dataUserRef = ref(db, `users/${user.uId}`);

  useEffect(() => {
    update(dataUserRef, {
      count:
        user.lastLogin === new Date().toLocaleDateString() ? user.count : 3,
    });
  }, []);

  return (
    <>
      <SafeAreaViewTitle title={'어떤 조언을 듣고싶나요?'} color={'#50b196'} />

      <ImageSlice />

      <WorryButton />
    </>
  );
};

export default WorryContents;
