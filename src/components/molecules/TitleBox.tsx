import React from 'react';
import { styled } from 'styled-components';
import { Text as TextDefault } from 'react-native';
import { Flex } from '@react-native-material/core';

const Title = styled(TextDefault)<{ color?: string; size?: number }>`
  font-size: ${(props) => (props.size ? `${props.size}px` : '30px')};
  margin-top: 10px;
  font-weight: 900;
  color: ${(props) => (props.color ? props.color : '#232D3D')};
`;

const SubTitle = styled(TextDefault)<{ color?: string }>`
  font-size: 12px;
  margin-top: 30px;
  color: ${(props) => (props.color ? props.color : '#232D3D')};
  opacity: 0.5;
`;

const TitleBox = ({ title, subTitle, color, size }: TitleBoxProps) => {
  return (
    <>
      <Flex justify="between" items="center" direction="row" w={'80%'}>
        {color ? (
          <>
            <Title color={color} size={size}>
              {title}
            </Title>
            <SubTitle color={color}>{subTitle}</SubTitle>
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
