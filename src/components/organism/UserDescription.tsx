import { View, Text } from 'react-native';
import React from 'react';
import { styled } from 'styled-components';
import Center from '../atoms/Center';

const RuleText = styled(Text)`
  font-size: 20px;
  color: gray;
`;

const RuleTextUnderline = styled(View)`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  padding-bottom: 3px;
  margin: 20px 0px;
`;

const RuleContent = styled(Text)`
  font-size: 10px;
  color: gray;
`;

const UserDescription = () => {
  return (
    <Center>
      {/* <RuleTextUnderline>
        <RuleText>고객센터</RuleText>
      </RuleTextUnderline>
      <RuleContent>정식버전에서 만나보실 수 있습니다.</RuleContent> */}
      <RuleTextUnderline>
        <RuleText>공지사항</RuleText>
      </RuleTextUnderline>
      <RuleContent>정식버전에서 만나보실 수 있습니다.</RuleContent>
      <RuleContent>2023.10.5 첫 개시!!</RuleContent>
      <RuleTextUnderline>
        <RuleText>1:1 문의</RuleText>
      </RuleTextUnderline>
      <RuleContent>정식버전에서 만나보실 수 있습니다.</RuleContent>
      <RuleContent>문의는 wjdrhksgns7602@gmail.com 으로 주세요.</RuleContent>
    </Center>
  );
};

export default UserDescription;
