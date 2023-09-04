import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { styled } from 'styled-components';
import Button from '../../atoms/Button';
import SafeAreaViewTitle from '../../organism/SafeAreaViewTitle';
import UseNavigate from '../../../hooks/useNavigate';

const Container = styled(View)`
  flex: 1;
  margin-bottom: 20px;
`;

const KeyboardAvoidingContainer = styled(KeyboardAvoidingView)`
  margin-bottom: 20px;
  flex: 6;
`;

const TextBox = styled(TextInput)`
  height: 100%;
  padding: 20px;
  font-size: 20px;
`;

const ShadowBox = styled(Shadow)`
  width: 100%;
`;

const Forms = styled(View)`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const Boxes = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const Three = () => {
  const { MoveStep, MoveBack } = UseNavigate({ to: 'WorryStep4' });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <SafeAreaViewTitle
          title={`고민이 무엇인가요??`}
          color={'#50b196'}
          size={30}
        />
        <KeyboardAvoidingContainer
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <ShadowBox>
            <TextBox
              multiline={true}
              blurOnSubmit={true}
              placeholder="당신의 이야기를 들려주세요 🙂"
            />
          </ShadowBox>
        </KeyboardAvoidingContainer>

        <Forms>
          <Boxes>
            <Button
              text={'보내기'}
              fontSize={20}
              bgColor={'#4abd9d'}
              onPress={MoveStep}
            />
          </Boxes>
          <Boxes>
            <Button
              text={'뒤로가기'}
              fontSize={20}
              bgColor={'gray'}
              onPress={MoveBack}
            />
          </Boxes>
        </Forms>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Three;
