import React from 'react';
import LoginScreen from 'screens/LoginScreen';
import renderer from 'react-test-renderer';
import 'utils/__tests__/throwOnConsoleError';

describe('<LoginScreen />', () => {
  test('it renders correctly', () => {
    renderer.create(<LoginScreen />);
  });
  test('it renders correctly when register form is displayed', () => {
    const component = renderer.create(<LoginScreen />);
    const instance = component.root.instance;
    instance.setState({ form: 'register' });
  });
});
