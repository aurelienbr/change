import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from '~screens/LoginScreen';
import MainTabNavigator from '~navigation/MainTabNavigator';

const LoginStack = createStackNavigator({
  Login: LoginScreen
});

export default createAppContainer(
  createSwitchNavigator({
    Login: LoginStack,
    Main: MainTabNavigator
  })
);
