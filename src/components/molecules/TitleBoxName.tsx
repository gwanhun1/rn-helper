import React from 'react';
import { styled } from 'styled-components';
import { Text as TextDefault, View } from 'react-native';
import { Flex } from '@react-native-material/core';
import Center from '../atoms/Center';
import { useRecoilState } from 'recoil';
import { isUser } from '../../recoil/Atom';

const Title = styled(TextDefault)<{ color?: string; size?: number }>`
  font-size: ${(props) => (props.size ? `${props.size}px` : '30px')};
  margin-top: 10px;
  font-weight: 900;
  color: ${(props) => (props.color ? props.color : '#232D3D')};
`;

const Name = styled(TextDefault)<{ color?: string }>`
  margin-top: 30px;
  font-size: 15px;
  color: ${(props) => (props.color ? props.color : '#232D3D')};
  opacity: 0.9;
`;
const SubTitle = styled(TextDefault)<{ color?: string }>`
  font-size: 10px;
  color: ${(props) => (props.color ? props.color : '#232D3D')};
  opacity: 0.9;
`;
const TextBox = styled(View)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const TitleBoxName = ({ title, subTitle, color, size }: TitleBoxProps) => {
  const [user] = useRecoilState(isUser);
  return (
    <>
      <Flex justify="between" items="center" direction="row" w={'80%'}>
        {color ? (
          <>
            <Title color={color} size={size}>
              {title}
            </Title>
            <TextBox>
              <Name color={color}>
                {user.username && `${user.username}님,`}
              </Name>
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

export default TitleBoxName;

type TitleBoxProps = {
  title: string;
  subTitle?: string;
  color?: string;
  size?: number;
};
