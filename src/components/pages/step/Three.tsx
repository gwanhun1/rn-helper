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
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { PostContent, isUser } from '../../../recoil/Atom';
import { getDatabase, ref, set } from 'firebase/database';
import app from '../../../../firebaseConfig';

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
  const [text, setText] = useState('');
  const [user] = useRecoilState(isUser);

  const [content, setContent] = useRecoilState(PostContent);
  const handlePost = async () => {
    await setContent((prev) => ({ ...prev, content: text }));
  };
  useEffect(() => {
    if (content.content) {
      MoveStep();
    }
  }, [content]);

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
              onChangeText={(newText) => setText(newText)} // 텍스트 변경 시 호출되는 콜백 함수
              value={text} // 현재 텍스트 값을 설정
            />
          </ShadowBox>
        </KeyboardAvoidingContainer>

        <Forms>
          <Boxes>
            <Button
              text={'보내기'}
              fontSize={20}
              bgColor={'#4abd9d'}
              onPress={handlePost}
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
