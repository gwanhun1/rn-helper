import {
  View as ViewDefault,
  Text,
  Image,
  ImageSourcePropType,
  View,
} from 'react-native';
import React from 'react';
import Center from '../atoms/Center';
import { styled } from 'styled-components';
import { Flex as FlexDefault } from '@react-native-material/core';
import Accordion from '../atoms/Accordion';

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

const AccordionBox = styled(View)`
  width: 120px;
`;
const PostBox = ({ icon, username, post, content }: PostBoxProps) => {
  const images: ImagesMap = {
    gold: require('../../../assets/gold.png'),
    silver: require('../../../assets/silver.png'),
    bronze: require('../../../assets/bronze.png'),
  };

  const imageSource = (icon && images[icon]) || null;
  return (
    <Center>
      <Flex>
        {imageSource && <StyledImage source={imageSource} />}
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
