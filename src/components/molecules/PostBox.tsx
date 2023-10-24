import { useEffect } from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import Center from '../atoms/Center';
import { styled } from 'styled-components';
import { Flex as FlexDefault } from '@react-native-material/core';
import Accordion from '../atoms/Accordion';
import { Path, Svg } from 'react-native-svg';

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
            <Svg height="30px" width="30px" viewBox="0 0 250 300.439">
              <Path
                fill="#BF392C"
                d="M276.967,0h-84.498L70.415,178.385h84.498L276.967,0z"
              />
              <Path
                fill="#E2574C"
                d="M23.472,0h84.498l122.053,178.385h-84.498L23.472,0z"
              />
              <Path
                fill="#EFC75E"
                d="M154.914,93.887c57.271,0,103.276,46.005,103.276,103.276s-46.005,103.276-103.276,103.276
		S51.638,254.434,51.638,197.163S97.643,93.887,154.914,93.887z"
              />
              <Path
                fill="#D7B354"
                d="M154.914,122.053c-41.31,0-75.11,33.799-75.11,75.11s33.799,75.11,75.11,75.11
		s75.11-33.799,75.11-75.11S196.224,122.053,154.914,122.053z M154.914,253.495c-30.983,0-56.332-25.35-56.332-56.332
		s25.35-56.332,56.332-56.332s56.332,25.35,56.332,56.332S185.896,253.495,154.914,253.495z"
              />
            </Svg>
          )}
          {icon === 'Silver' && (
            <Svg height="30px" width="30px" viewBox="0 0 250 300.439">
              <Path
                fill="#BF392C"
                d="M276.967,0h-84.498L70.415,178.385h84.498L276.967,0z"
              />
              <Path
                fill="#E2574C"
                d="M23.472,0h84.498l122.053,178.385h-84.498L23.472,0z"
              />
              <Path
                fill="#E4E7E7"
                d="M154.914,93.887c57.271,0,103.276,46.005,103.276,103.276s-46.005,103.276-103.276,103.276
          S51.638,254.434,51.638,197.163S97.643,93.887,154.914,93.887z"
              />
              <Path
                fill="#CDCFCF"
                d="M154.914,122.053c-41.31,0-75.11,33.799-75.11,75.11s33.799,75.11,75.11,75.11
          s75.11-33.799,75.11-75.11S196.224,122.053,154.914,122.053z M154.914,253.495c-30.983,0-56.332-25.35-56.332-56.332
          s25.35-56.332,56.332-56.332s56.332,25.35,56.332,56.332S185.896,253.495,154.914,253.495z"
              />
            </Svg>
          )}
          {icon === 'Bronze' && (
            <Svg height="30px" width="30px" viewBox="0 0 250 300.439">
              <Path
                fill="#BF392C"
                d="M276.967,0h-84.498L70.415,178.385h84.498L276.967,0z"
              />
              <Path
                fill="#E2574C"
                d="M23.472,0h84.498l122.053,178.385h-84.498L23.472,0z"
              />
              <Path
                fill="#ED9D5D"
                d="M154.914,93.887c57.271,0,103.276,46.005,103.276,103.276s-46.005,103.276-103.276,103.276
            S51.638,254.434,51.638,197.163S97.643,93.887,154.914,93.887z"
              />
              <Path
                fill="#D58D54"
                d="M154.914,122.053c-41.31,0-75.11,33.799-75.11,75.11s33.799,75.11,75.11,75.11
            s75.11-33.799,75.11-75.11S196.224,122.053,154.914,122.053z M154.914,253.495c-30.983,0-56.332-25.35-56.332-56.332
            s25.35-56.332,56.332-56.332s56.332,25.35,56.332,56.332S185.896,253.495,154.914,253.495z"
              />
            </Svg>
          )}
        </Box>

        {content && post && (
          <Accordion title={post} content={content} width={70} />
        )}
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
