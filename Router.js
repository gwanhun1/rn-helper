import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Home from './src/pages/Home/index';
import Logs from './src/pages/Logs/index';
import Credit from './src/pages/Credit/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Worry from './src/pages/Worry';
import One from './src/components/pages/step/One';
import Two from './src/components/pages/step/Two';
import Three from './src/components/pages/step/Three';
import Four from './src/components/pages/step/Four';
import Five from './src/components/pages/step/Five';
import User from './src/pages/User';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function MyTabs() {
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
    <NavigationContainer>
      <Tab.Navigator
        barStyle={{ backgroundColor: '#fff' }}
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

            return (
              <MaterialCommunityIcons
                name={iconName}
                size={25}
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
    </NavigationContainer>
  );
}
