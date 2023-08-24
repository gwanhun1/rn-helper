import React, { useEffect } from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import Center from '../atoms/Center';
import { styled } from 'styled-components';
import { Flex as FlexDefault } from '@react-native-material/core';
import Accordion from '../atoms/Accordion';
import Silver from '../../../assets/silver.svg';
import Gold from '../../../assets/gold.svg';
import Bronze from '../../../assets/bronze.svg';

const Flex = styled(FlexDefault)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px;
`;

const StyledImage = styled(Image)`
  border-radius: 10px;
  width: 40px;
  height: 40px;
`;

const SubText = styled(Text)`
  color: #232d3d;
  opacity: 0.5;
  width: 50px;
`;

const Box = styled(View)`
  width: 30px;
  height: 30px;
`;

const PostBox = ({ icon, username, post, content }: PostBoxProps) => {
  return (
    <Center>
      <Flex>
        <Box>
          {icon === 'Gold' && (
            <Gold preserveAspectRatio="xMinYMin meet" viewBox="20 70 600 410" />
          )}
          {icon === 'Silver' && (
            <Silver
              preserveAspectRatio="xMinYMin meet"
              viewBox="20 70 600 410"
            />
          )}
          {icon === 'Bronze' && (
            <Bronze
              preserveAspectRatio="xMinYMin meet"
              viewBox="20 70 600 410"
            />
          )}
        </Box>

        <Accordion title={'post'} content="11111" width={70} />
        {username && (
          <SubText ellipsizeMode="tail" numberOfLines={1}>
            {username}
          </SubText>
        )}
      </Flex>
    </Center>
  );
};

export default PostBox;

type PostBoxProps = {
  icon?: string;
  username?: string;
  post: string;
  content: string;
};

type ImagesMap = {
  [key: string]: ImageSourcePropType;
};
