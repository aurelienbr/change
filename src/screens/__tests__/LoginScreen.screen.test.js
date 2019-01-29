import React from 'react';
import LoginScreen from 'screens/LoginScreen';
import renderer from 'react-test-renderer';
import 'utils/__tests__/throwOnConsoleError';
import 'utils/__tests__/mockNativeModules';
import withStore from 'utils/__tests__/mockStore';

jest.mock('react-navigation', () => ({ withNavigation: component => component }));
const navigation = { navigate: jest.fn() };

describe('<LoginScreen />', () => {
  test('it renders correctly', () => {
    renderer.create(withStore(<LoginScreen navigation={navigation} />));
  });
  test('it renders correctly when register form is displayed', () => {
    const component = renderer.create(withStore(<LoginScreen navigation={navigation} />));
    const instance = component.root.instance;
    instance.setState({ form: 'register' });
  });
});
