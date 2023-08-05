import { useNavigation } from '@react-navigation/native';
import SafeAreaViewTitle from '../../organism/SafeAreaViewTitle';
import Button from '../../atoms/Button';
import { ScrollView, View } from 'react-native';
import { styled } from 'styled-components';

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

const Two = () => {
  const navigation = useNavigation();

  const MoveStep = () => {
    navigation.navigate('WorryStep3' as never);
  };

  const MoveBack = () => {
    navigation.goBack();
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
          <Box>
            <Button
              text={'웃기게'}
              fontSize={20}
              bgColor={'#4abd9d'}
              onPress={MoveStep}
            />
          </Box>
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
