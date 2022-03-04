import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import Browse from '../../screens/Browse';

import Home from '../../screens/Home';
import Library from '../../screens/Library';
import CustomTabBar from './CustomTabBar';

const Tab = createBottomTabNavigator();

const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'Home':
      iconName = 'home';
      break;
    case 'Browse':
      iconName = 'appstore-o';
      break;
    case 'Library':
      iconName = 'folder1';
      break;
    default:
      break;
  }

  return <Icon name={iconName} color={color} size={24} />;
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => screenOptions(route, color),
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#87ceeb',
          borderTopColor: '#666666',
        },
        // activeTintColor: 'white',
        // inactiveTintColor: '#d9d9d9',
        // style: {
        //   borderTopColor: '#66666666',
        //   backgroundColor: 'transparent',
        //   elevation: 0,
        // },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Browse" component={Browse} />
      <Tab.Screen name="Library" component={Library} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
