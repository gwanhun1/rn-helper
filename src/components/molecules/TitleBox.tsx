import React from 'react';
import { styled } from 'styled-components/native';
import { Text as TextDefault, View } from 'react-native';
import { Flex } from '@react-native-material/core';
import Center from '../atoms/Center';
import { Dimensions } from 'react-native';

const Title = styled(TextDefault)<{ color?: string }>`
  margin-top: 10px;
  font-weight: 900;
  color: ${(props) => (props.color ? props.color : '#232D3D')};
`;

const SubTitle = styled(TextDefault)<{ color?: string }>`
  font-size: 10px;
  margin-top: 30px;
  color: ${(props) => (props.color ? props.color : '#232D3D')};
  opacity: 0.9;
`;
const TextBox = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleBox = ({ title, subTitle, color, size }: TitleBoxProps) => {
  return (
    <>
      <Flex justify="between" items="center" direction="row" w={'80%'}>
        {color ? (
          <>
            <Title
              color={color}
              style={{
                fontSize: Dimensions.get('window').width > 500 ? 30 : 25,
              }}
            >
              {title}
            </Title>
            <TextBox>
              <SubTitle color={color}>{subTitle}</SubTitle>
            </TextBox>
          </>
        ) : (
          <>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
          </>
        )}
      </Flex>
    </>
  );
};

export default TitleBox;

type TitleBoxProps = {
  title: string;
  subTitle?: string;
  color?: string;
  size?: number;
};
