import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Logs from './src/pages/Logs';
import Worry from './src/pages/Worry';
import Home from './src/pages/Home';
import Credit from './src/pages/Credit';
import User from './src/pages/User';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import One from './src/components/pages/step/One';
import Two from './src/components/pages/step/Two';
import Three from './src/components/pages/step/Three';
import Four from './src/components/pages/step/Four';
import Five from './src/components/pages/step/Five';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { login } from './src/recoil/Atom';
import { auth } from './firebaseConfig';

export const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  const [isLogin, setIsLogin] = useRecoilState(login);

  useEffect(
    () =>
      auth.onAuthStateChanged((user) => {
        if (user) {
          setIsLogin(true);
        } else {
          setIsLogin(false);
        }
      }),
    [],
  );

  const goToWorryHome = () => {
    navigation.dispatch(
      CommonActions.reset({ index: 0, routes: [{ name: 'WorryHome' }] }),
    );
  };

  const WorryStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="WorryHome" component={Worry} />
        <Stack.Screen name="WorryStep1" component={One} />
        <Stack.Screen name="WorryStep2" component={Two} />
        <Stack.Screen name="WorryStep3" component={Three} />
        <Stack.Screen name="WorryStep4" component={Four} />
        <Stack.Screen name="WorryStep5" component={Five} />
      </Stack.Navigator>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#50B196',
        tabBarIcon: ({ focused, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === '조언') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === '로그') {
            iconName = focused ? 'database' : 'database-outline';
          } else if (route.name === '결제') {
            iconName = focused ? 'piggy-bank' : 'piggy-bank-outline';
          } else if (route.name === '마이페이지') {
            iconName = focused ? 'account' : 'account-outline';
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons
              name={iconName}
              size={size}
              color={focused ? '#50B196' : 'gray'}
            />
          );
        },
      })}
    >
      <Tab.Screen name="로그" component={Logs} />
      <Tab.Screen name="조언" component={WorryStack} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="결제" component={Credit} />
      <Tab.Screen name="마이페이지" component={User} />
    </Tab.Navigator>
  );
};
