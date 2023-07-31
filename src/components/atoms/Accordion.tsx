import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

const Container = styled(View)`
  margin: 10px 0 15px 0;
  border-radius: 2px;
  width: 70%;
  border-radius: 10px;
  /* background-color: #ffffff90; */
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  elevation: 3;
`;

const Title = styled(Text)`
  font-size: 15px;
  margin: 10px 7px 15px 7px;
  padding: 3px;
`;

const Content = styled(View)`
  padding: 10px;
`;

const ContentText = styled(Text)`
  font-size: 10px;
`;

const TouchableOpacityBox = styled(TouchableOpacity)`
  flex: 1;
  flex-direction: row;
`;

const PostBox = styled(View)`
  flex: 9;
`;

const IconBox = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Accordion = ({ title, content }: AccordionProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleAccordion = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Container>
      <TouchableOpacityBox onPress={toggleAccordion}>
        <PostBox>
          <Title ellipsizeMode="tail" numberOfLines={1}>
            {title}
          </Title>
        </PostBox>
        <IconBox>
          {isCollapsed ? (
            <AntDesign name="pluscircleo" size={12} color="gray" />
          ) : (
            <AntDesign name="minuscircleo" size={12} color="gray" />
          )}
        </IconBox>
      </TouchableOpacityBox>
      <Collapsible collapsed={isCollapsed}>
        <Content>
          <ContentText ellipsizeMode="tail" numberOfLines={1}>
            {content}
          </ContentText>
        </Content>
      </Collapsible>
    </Container>
  );
};

export default Accordion;

type AccordionProps = {
  title: string;
  content: string;
};
