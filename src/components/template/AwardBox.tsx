import React from 'react';
import PostBoxes from '../organism/PostBoxes';
import PostBox from '../molecules/PostBox';
import Center from '../atoms/Center';
import TitleBox from '../molecules/TitleBox';

const AwardBox = ({ title, subTitle }: AwardBox) => {
  return (
    <>
      <Center>
        <TitleBox
          title={title}
          subTitle={subTitle}
          color={'#50b196'}
          size={25}
        />
      </Center>
      <PostBoxes>
        <PostBox
          icon={'gold'}
          username={'username'}
          post={'post'}
          content={'content'}
        />
        <PostBox
          icon={'silver'}
          username={'username'}
          post={'post'}
          content={'content'}
        />
        <PostBox
          icon={'bronze'}
          username={'username'}
          post={'post'}
          content={'content'}
        />
      </PostBoxes>
    </>
  );
};

export default AwardBox;

type AwardBox = { title: string; subTitle: string };