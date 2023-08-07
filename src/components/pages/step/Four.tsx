import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { styled } from 'styled-components';
import AllCenter from '../../atoms/AllCenter';
import UseNavigate from '../../../hooks/useNavigate';

const LoadingText = styled(Text)`
  color: #4abd9d;
  font-size: 50rem;
  font-weight: bold;
`;
const Four = () => {
  const [textStep, setTextStep] = useState<number>(0);
  const TextArea = [
    '조언자\n 구하는 중 😌',
    '컨셉\n 잡는 중 😂',
    '수수료\n 내는 중 🥺',
    '조합하는 중 😍',
  ];
  const { MoveStep, MoveBack } = UseNavigate({ to: 'WorryStep5' });
  useEffect(() => {
    const timer = setTimeout(() => {
      if (textStep === 3) {
      }
      setTextStep((prev) => (prev + 1) % 4);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [textStep, MoveStep]);

  return (
    <View>
      <AllCenter>
        <LoadingText>{TextArea[textStep]}</LoadingText>
      </AllCenter>
    </View>
  );
};

export default Four;
