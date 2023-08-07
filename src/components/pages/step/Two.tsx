import SafeAreaViewTitle from '../../organism/SafeAreaViewTitle';
import Button from '../../atoms/Button';
import { ScrollView, View } from 'react-native';
import { styled } from 'styled-components';
import UseNavigate from '../../../hooks/useNavigate';

const FormBox = styled(View)`
  margin-bottom: 200px;
`;

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
const BigBox = styled(View)`
  flex: 2;
  flex-direction: 'row';
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const Two = () => {
  const { MoveStep, MoveBack } = UseNavigate({ to: 'WorryStep3' });

  const BtnClick = (e: any) => {
    console.log(1);
  };

  return (
    <FormBox>
      <SafeAreaViewTitle
        title={`어떻게\n 듣고싶나요??`}
        color={'#50b196'}
        size={50}
      />
      <ScrollView>
        <Form>
          <BigBox>
            <Button
              text={'웃기게'}
              fontSize={20}
              bgColor={'#4abd9d'}
              onPress={MoveStep}
            />
          </BigBox>
          <Box>
            <Button
              text={'츤데레'}
              fontSize={20}
              bgColor={'#4abd9d'}
              onPress={MoveStep}
            />
          </Box>
          <Box>
            <Button
              text={'차갑게'}
              fontSize={20}
              bgColor={'#4abd9d'}
              onPress={MoveStep}
            />
          </Box>
        </Form>
        <Form>
          <Box>
            <Button
              text={'따뜻하게'}
              fontSize={20}
              bgColor={'#4abd9d'}
              onPress={MoveStep}
            />
          </Box>
          <Box>
            <Button
              text={'정신번쩍'}
              fontSize={20}
              bgColor={'#4abd9d'}
              onPress={MoveStep}
            />
          </Box>
        </Form>
        <Form>
          <Box>
            <Button
              text={'공감'}
              fontSize={20}
              bgColor={'#4abd9d'}
              onPress={MoveStep}
            />
          </Box>
          <Box>
            <Button
              text={'어색'}
              fontSize={20}
              bgColor={'#4abd9d'}
              onPress={MoveStep}
            />
          </Box>
          <Box>
            <Button
              text={'울면서'}
              fontSize={20}
              bgColor={'#4abd9d'}
              onPress={MoveStep}
            />
          </Box>
        </Form>
        <Form>
          <Box>
            <Button
              text={'추앙하며'}
              fontSize={20}
              bgColor={'#4abd9d'}
              onPress={MoveStep}
            />
          </Box>
          <Box>
            <Button
              text={'놀리면서'}
              fontSize={20}
              bgColor={'#4abd9d'}
              onPress={MoveStep}
            />
          </Box>
        </Form>
        <Form>
          <Box>
            <Button
              text={'재밌게'}
              fontSize={20}
              bgColor={'#4abd9d'}
              onPress={MoveStep}
            />
          </Box>
          <Box>
            <Button
              text={'짜증'}
              fontSize={20}
              bgColor={'#4abd9d'}
              onPress={MoveStep}
            />
          </Box>
          <Box>
            <Button
              text={'투덜'}
              fontSize={20}
              bgColor={'#4abd9d'}
              onPress={MoveStep}
            />
          </Box>
        </Form>
        <Form>
          <Box>
            <Button
              text={'서운하게'}
              fontSize={20}
              bgColor={'#4abd9d'}
              onPress={MoveStep}
            />
          </Box>
          <Box>
            <Button
              text={'눈물나게'}
              fontSize={20}
              bgColor={'#4abd9d'}
              onPress={MoveStep}
            />
          </Box>
        </Form>
        <Form>
          <Box>
            <Button
              text={'매정'}
              fontSize={20}
              bgColor={'#4abd9d'}
              onPress={MoveStep}
            />
          </Box>
          <Box>
            <Button
              text={'내 편'}
              fontSize={20}
              bgColor={'#4abd9d'}
              onPress={MoveStep}
            />
          </Box>
          <Box>
            <Button
              text={'무섭게'}
              fontSize={20}
              bgColor={'#4abd9d'}
              onPress={MoveStep}
            />
          </Box>
        </Form>
        <Form>
          <Box>
            <Button
              text={'든든하게'}
              fontSize={20}
              bgColor={'#4abd9d'}
              onPress={MoveStep}
            />
          </Box>
          <Box>
            <Button
              text={'뒤로가기'}
              fontSize={20}
              bgColor={'gray'}
              onPress={MoveBack}
            />
          </Box>
        </Form>
      </ScrollView>
    </FormBox>
  );
};

export default Two;

const INITDATA = [
  { id: 0, title: '정신번쩍' },
  { id: 1, title: '츤데레' },
  { id: 2, title: '차갑게' },
  { id: 3, title: '따뜻하게' },
  { id: 4, title: '서운하게' },
  { id: 5, title: '공감' },
  { id: 6, title: '어색' },
  { id: 7, title: '울면서' },
  { id: 8, title: '놀리면서' },
  { id: 9, title: '웃기게' },
  { id: 10, title: '추앙하며' },
  { id: 11, title: '재밌게' },
  { id: 11, title: '투덜' },
  { id: 11, title: '짜증' },
  { id: 11, title: '눈물나게' },
  { id: 11, title: '내 편' },
  { id: 11, title: '무섭게' },
  { id: 11, title: '든든하게' },
  { id: 11, title: '뒤로가기' },
];
