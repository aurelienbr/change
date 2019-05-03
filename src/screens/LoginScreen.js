// @flow
import React, { PureComponent } from 'react';
import { View, ImageBackground, KeyboardAvoidingView, ScrollView } from 'react-native';
import BG_IMAGE from '~images/background2.jpg';
import styles from '~styles/screens/LoginScreen.style';
import LoginFormContainer from '~containers/authentication/LoginFormContainer';
import RegisterForm from '~components/authentication/RegisterForm';

type Props = {};
type State = {
  form: 'login' | 'register'
};

class LoginScreen extends PureComponent<Props, State> {
  state = {
    form: 'login'
  };

  static navigationOptions = {
    header: null
  };

  handleNavigateRegister = () => {
    this.setState({ form: 'register' });
  };

  handleNavigateLogin = () => {
    this.setState({ form: 'login' });
  };

  render() {
    const { form } = this.state;

    return (
      <ImageBackground source={BG_IMAGE} style={styles.bgImage} testID={'login'}>
        <ScrollView scrollEnabled={false} keyboardShouldPersistTaps="handled" contentContainerStyle={styles.container}>
          <KeyboardAvoidingView behavior="position" contentContainerStyle={styles.formContainer}>
            <View style={styles.formView}>
              {form === 'login' ? (
                <LoginFormContainer onNavigateRegister={this.handleNavigateRegister} />
              ) : (
                <RegisterForm onNavigateLogin={this.handleNavigateLogin} />
              )}
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default LoginScreen;
