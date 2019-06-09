/* eslint-disable */
import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '~screens/HomeScreen';

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen
  }
);

export default MainNavigator;
