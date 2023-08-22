import { StatusBar } from 'expo-status-bar';
import { BottomTabs } from './Router';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <StatusBar style="dark" />
        <BottomTabs />
      </NavigationContainer>
    </RecoilRoot>
  );
}
``;
