import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Logs from './src/pages/Logs';
import Worry from './src/pages/Worry';
import Home from './src/pages/Home';
import Credit from './src/pages/Credit';
import User from './src/pages/User';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export const BottomTabs = () => {
  const Tab = createBottomTabNavigator();

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
      <Tab.Screen name="조언" component={Worry} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="결제" component={Credit} />
      <Tab.Screen name="마이페이지" component={User} />
    </Tab.Navigator>
  );
};
