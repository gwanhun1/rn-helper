import { StatusBar } from 'expo-status-bar';
import { BottomTabs } from './Router';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <BottomTabs />
    </NavigationContainer>
  );
}
``;
