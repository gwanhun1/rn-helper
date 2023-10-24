import React, { useEffect, useState } from 'react';
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
import { useRecoilState } from 'recoil';
import { PostContent, isUser } from '../../../recoil/Atom';
import { useNavigation } from '@react-navigation/native';
import Four from './Four';

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
  const { MoveStep, MoveBack } = UseNavigate({ to: 'WorryStep5' });
  const [text, setText] = useState('');
  const [user] = useRecoilState(isUser);
  const navigation = useNavigation();
  const [apiCalled, setApiCalled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function getBotResponse(userMessage) {
    if (!apiCalled) {
      setApiCalled(true);
      setIsLoading(true);

      const apiUrl = 'https://api.openai.com/v1/chat/completions';
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer `,
      };
      const data = {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `you are a ${content.oneStep} and answer for me with ${content.twoStep}. Please provide a short response.`,
          },
          {
            role: 'user',
            content: userMessage,
          },
        ],
      };

      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(data),
        });

        const responseData = await response.json();
        setContent({
          ...content,
          response: responseData.choices[0].message.content.replace(/"/g, ''),
        });
      } catch (error) {
        console.error('Error:', error);
      }

      setIsLoading(false);
    }
  }
  const [content, setContent] = useRecoilState(PostContent);
  const handlePost = async () => {
    getBotResponse(content.content);
  };

  useEffect(() => {
    if (content.response) {
      MoveStep();
    }
  }, [content.response]);

  return (
    <>
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
                onChangeText={(newText) => {
                  setText(newText);
                  setContent((prev) => ({ ...prev, content: newText }));
                }}
                value={text}
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
      {isLoading ? <Four /> : null}
    </>
  );
};

export default Three;
