import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import MainTabNavigator from '~navigation/MainTabNavigator';

export default createAppContainer(
  createSwitchNavigator({
    Main: MainTabNavigator
  })
);
