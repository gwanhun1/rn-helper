import { RecoilRoot } from 'recoil';
import { StatusBar } from 'expo-status-bar';
import { MyTabs } from './Router';
import { Text, TextInput } from 'react-native';

export default function App() {
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;

  TextInput.defaultProps = TextInput.defaultProps || {};
  TextInput.defaultProps.allowFontScaling = false;

  return (
    <RecoilRoot>
      <MyTabs />
    </RecoilRoot>
  );
}
