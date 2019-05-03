import React from 'react';
import renderer from 'react-test-renderer';
import LoginScreen from '~screens/LoginScreen';
import '~utils/tests/throwOnConsoleError';
import '~utils/tests/mockNativeModules';
import withStore from '~utils/tests/mockStore';

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
