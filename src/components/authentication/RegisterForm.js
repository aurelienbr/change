// @flow
import React, { Fragment, PureComponent } from 'react';
import { Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from 'assets/styles/components/authentication/RegisterForm.style';
import { validateEmail } from 'utils/validatorUtils';

type Props = {
  onNavigateLogin: () => void
};
type State = {
  email: string,
  email_valid: boolean,
  password: string,
  login_failed: boolean,
  showLoading: boolean
};

class RegisterForm extends PureComponent<Props, State> {
  state = {
    email: '',
    email_valid: true,
    password: '',
    login_failed: false,
    showLoading: false
  };
  _emailInput: ?HTMLInputElement;
  _passwordInput: ?HTMLInputElement;

  handleSubmitLoginCredentials = () => {
    const { showLoading } = this.state;

    this.setState({
      showLoading: !showLoading
    });
  };

  setEmailInput = (input: ?HTMLInputElement) => {
    this._emailInput = input;
  };

  handleEmailChanged = (email: string) => {
    this.setState({ email });
  };

  handleSubmitEmail = () => {
    this.setState({ email_valid: validateEmail(this.state.email) });
    if (this._passwordInput) this._passwordInput.focus();
  };

  setPasswordInput = (input: ?HTMLInputElement) => {
    this._passwordInput = input;
  };

  handlePasswordChanged = (password: string) => {
    this.setState({ password });
  };

  render() {
    const { email, password, email_valid, showLoading } = this.state;

    return (
      <Fragment>
        <View style={styles.loginTitle}>
          <View style={styles.loginTitleContent}>
            <Text style={styles.travelText}>TRĪS</Text>
          </View>
        </View>
        <View style={styles.loginInput}>
          <Input
            leftIcon={<Icon name="user-o" color="rgba(171, 189, 219, 1)" size={25} />}
            containerStyle={styles.inputContainer}
            onChangeText={this.handleEmailChanged}
            value={email}
            inputStyle={styles.input}
            keyboardAppearance="light"
            placeholder="Email"
            autoFocus={false}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            ref={this.setEmailInput}
            onSubmitEditing={this.handleSubmitEmail}
            blurOnSubmit={false}
            placeholderTextColor="white"
            errorStyle={styles.inputError}
            errorMessage={email_valid ? null : 'Please enter a valid email address'}
          />
          <Input
            leftIcon={<Icon name="lock" color="rgba(171, 189, 219, 1)" size={25} />}
            containerStyle={styles.inputContainer}
            onChangeText={this.handlePasswordChanged}
            value={password}
            inputStyle={styles.input}
            secureTextEntry
            keyboardAppearance="light"
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            returnKeyType="done"
            ref={this.setPasswordInput}
            blurOnSubmit
            placeholderTextColor="white"
          />
          <Input
            leftIcon={<Icon name="lock" color="rgba(171, 189, 219, 1)" size={25} />}
            containerStyle={styles.inputContainer}
            onChangeText={this.handlePasswordChanged}
            value={password}
            inputStyle={styles.input}
            secureTextEntry
            keyboardAppearance="light"
            placeholder="Confirmer le mot de passe"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            returnKeyType="done"
            ref={this.setPasswordInput}
            blurOnSubmit
            placeholderTextColor="white"
          />
        </View>
        <Button
          title="CONNEXION"
          onPress={this.handleSubmitLoginCredentials}
          loading={showLoading}
          loadingProps={{ size: 'small', color: 'white' }}
          disabled={!email_valid && password.length < 8}
          buttonStyle={styles.buttonLogin}
          containerStyle={styles.buttonLoginContainer}
          titleStyle={styles.buttonLoginTitle}
        />
        <View style={styles.footerView}>
          <Text style={styles.footerText}>Déjà un compte ?</Text>
          <Button
            title="Connexion"
            clear
            activeOpacity={0.5}
            titleStyle={styles.buttonCreateTitle}
            containerStyle={styles.buttonCreateContainer}
            onPress={this.props.onNavigateLogin}
          />
        </View>
      </Fragment>
    );
  }
}

export default RegisterForm;
