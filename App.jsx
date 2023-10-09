import { StatusBar } from 'expo-status-bar';
import { BottomTabs } from './Router';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';
import { LogBox } from 'react-native';

// Firebase 초기화 코드 (이미 작성된 코드)

// Firebase 경고 메시지를 숨기는 설정
LogBox.ignoreAllLogs();

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
