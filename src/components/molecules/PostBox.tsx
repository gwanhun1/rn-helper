import React, { useEffect } from 'react';
import { Image, ImageSourcePropType, Text } from 'react-native';
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

const images: ImagesMap = {
  gold: require('../../../assets/gold.png'),
  silver: require('../../../assets/silver.png'),
  bronze: require('../../../assets/bronze.png'),
};

const PostBox = ({ icon, username, post, content }: PostBoxProps) => {
  const imageSource = (icon && images[icon]) || null;

  useEffect(() => {
    // Prefetch the image when the component mounts
    if (imageSource) {
      // Type assertion to treat it as a string
      const imageUri = Image.resolveAssetSource(imageSource).uri as string;
      Image.prefetch(imageUri);
    }
  }, [imageSource]);

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
