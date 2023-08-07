import { useNavigation } from '@react-navigation/native';

const UseNavigate = ({ to }: UseNavigateProps) => {
  const navigation = useNavigation();

  const MoveStep = () => {
    navigation.navigate(to as never);
  };

  const MoveBack = () => {
    navigation.goBack();
  };

  return { MoveStep, MoveBack };
};

export default UseNavigate;

type UseNavigateProps = {
  to: string;
};
