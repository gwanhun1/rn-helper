import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { styled } from 'styled-components';
import SafeAreaViewTitle from '../../organism/SafeAreaViewTitle';
import Button from '../../atoms/Button';
import UseNavigate from '../../../hooks/useNavigate';

const Form = styled(View)`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
`;

const Box = styled(View)`
  flex: 1;
  flex-direction: 'row';
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const FormBox = styled(View)`
  margin-bottom: 200px;
`;

const One = () => {
  const { MoveStep, MoveBack } = UseNavigate({ to: 'WorryStep2' });

  return (
    <FormBox>
      <SafeAreaViewTitle
        title={`누구에게\n 듣고싶나요??`}
        color={'#50b196'}
        size={50}
      />
      <ScrollView>
        <Form>
          <Box>
            <Button
              text={'아이'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={MoveStep}
            />
          </Box>
          <Box>
            <Button
              text={'학생'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={MoveStep}
            />
          </Box>
          <Box>
            <Button
              text={'어른'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={MoveStep}
            />
          </Box>
        </Form>
        <Form>
          <Box>
            <Button
              text={'할머니'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={MoveStep}
            />
          </Box>
          <Box>
            <Button
              text={'할아버지'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={MoveStep}
            />
          </Box>
        </Form>
        <Form>
          <Box>
            <Button
              text={'엄마'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={MoveStep}
            />
          </Box>
          <Box>
            <Button
              text={'아빠'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={MoveStep}
            />
          </Box>
          <Box>
            <Button
              text={'강아지'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={MoveStep}
            />
          </Box>
        </Form>
        <Form>
          <Box>
            <Button
              text={'동네 아저씨'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={MoveStep}
            />
          </Box>
          <Box>
            <Button
              text={'옆집 아줌마'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={MoveStep}
            />
          </Box>
        </Form>
        <Form>
          <Box>
            <Button
              text={'외계인'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={MoveStep}
            />
          </Box>
          <Box>
            <Button
              text={'삼촌'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={MoveStep}
            />
          </Box>
          <Box>
            <Button
              text={'이모'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={MoveStep}
            />
          </Box>
        </Form>
        <Form>
          <Box>
            <Button
              text={'동네 백수'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={MoveStep}
            />
          </Box>
          <Box>
            <Button
              text={'척척박사'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={MoveStep}
            />
          </Box>
        </Form>
        <Form>
          <Box>
            <Button
              text={'전문가'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={MoveStep}
            />
          </Box>
          <Box>
            <Button
              text={'T 100%'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={MoveStep}
            />
          </Box>
          <Box>
            <Button
              text={'박찬호'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={MoveStep}
            />
          </Box>
        </Form>
        <Form>
          <Box>
            <Button
              text={'심리상담사'}
              fontSize={20}
              bgColor={'#54d2af'}
              onPress={MoveStep}
            />
          </Box>
          <Box>
            <Button
              text={'뒤로가기'}
              fontSize={20}
              bgColor={'lightgray'}
              onPress={MoveBack}
            />
          </Box>
        </Form>
      </ScrollView>
    </FormBox>
  );
};

export default One;
