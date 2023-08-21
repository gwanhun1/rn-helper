import React from 'react';
import Button from '../atoms/Button';
import { styled } from 'styled-components';
import { View } from 'react-native';

const Form = styled(View)`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Box = styled(View)`
  flex: 1;
  flex-direction: 'row';
  padding: 5px;
`;

const InfoBtn = () => {
  return (
    <Form>
      <Box>
        <Button
          text={'회원정보 수정'}
          fontSize={15}
          bgColor={'#54d2af'}
          //   onPress={'MoveStep'}
        />
      </Box>
      <Box>
        <Button text={'로그아웃'} fontSize={15} bgColor={'#54d2af'} />
      </Box>
    </Form>
  );
};

export default InfoBtn;
