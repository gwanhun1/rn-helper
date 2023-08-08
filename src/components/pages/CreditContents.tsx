import { Text, View } from 'react-native';
import React from 'react';
import { styled } from 'styled-components';

const Container = styled(View)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #50b196;
`;

const CreditText = styled(Text)`
  color: #fff;
  font-size: 30;
  font-weight: bold;
`;

const CreditContents = () => {
  return (
    <Container>
      <CreditText>프리미엄 회원권이</CreditText>
      <CreditText> 곧 돌아옵니다 😁</CreditText>
    </Container>
  );
};

export default CreditContents;
