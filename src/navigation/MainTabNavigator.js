/* eslint-disable */
import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import TabBarIcon from 'components/TabBarIcon';
import HomeScreen from 'screens/HomeScreen';
import LinksScreen from 'screens/LinksScreen';
import SettingsScreen from 'screens/SettingsScreen';
import LoginScreen from 'screens/LoginScreen';

import DrawerContainer from 'containers/fragments/DrawerContainer';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'} />
      )
    }
  }
);

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen
  },
  {
    navigationOptions: {
      tabBarLabel: 'Links',
      tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
    }
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  {
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
    }
  }
);

const MainTabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack
});

const MainDrawerNavigator = createDrawerNavigator(
  {
    Main: MainTabNavigator
  },
  {
    contentComponent: DrawerContainer
  }
);

const MainNavigator = createStackNavigator({
  MainTabNavigator,
  MainDrawerNavigator
});

export default MainDrawerNavigator;
