import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Logs from './src/pages/Logs';
import Worry from './src/pages/Worry';
import Home from './src/pages/Home';
import Credit from './src/pages/Credit';
import User from './src/pages/User';

export const BottomTabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="로그" component={Logs} />
      <Tab.Screen name="조언" component={Worry} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="결제" component={Credit} />
      <Tab.Screen name="마이페이지" component={User} />
    </Tab.Navigator>
  );
};
