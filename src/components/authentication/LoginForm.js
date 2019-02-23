// @flow
import React, { Fragment, PureComponent } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';
import { WHITE } from '~constants/colorConstants';
import { STATUS_LOADING, STATUS_SUCCESS, type Status } from '~types/Status';
import { validateEmail } from '~utils/validatorUtils';
import styles from '~styles/components/authentication/LoginForm.style';

export type StateProps = {
  status: Status,
  error: ?string,
  token: ?string
};

export type DispatchProps = {
  loginUser: (email: string, password: string) => void,
  loginUserWithToken: (token: string) => void
  // setCurrentLanguage: (language: string) => void
};

type Props = {
  onNavigateRegister: () => void,
  navigation: {
    navigate: (path: string) => void
  }
} & StateProps &
  DispatchProps;

type State = {
  email: ?string,
  email_valid: boolean,
  password: ?string
};

class LoginForm extends PureComponent<Props, State> {
  state = {
    email: '',
    email_valid: true,
    password: ''
  };
  _emailInput: ?HTMLInputElement;
  _passwordInput: ?HTMLInputElement;

  componentDidUpdate() {
    if (this.props.status === STATUS_SUCCESS) this.props.navigation.navigate('Main');
  }

  componentDidMount() {
    if (this.props.token) this.props.loginUserWithToken(this.props.token);
  }

  handleSubmitLoginCredentials = () => {
    if (this.state.email && this.state.password) this.props.loginUser(this.state.email, this.state.password);
  };

  setEmailInput = (input: ?HTMLInputElement) => {
    this._emailInput = input;
  };

  handleEmailChanged = (email: string) => {
    this.setState({ email });
  };

  handleSubmitEmail = () => {
    if (this.state.email) this.setState({ email_valid: validateEmail(this.state.email) });
    if (this._passwordInput) this._passwordInput.focus();
  };

  setPasswordInput = (input: ?HTMLInputElement) => {
    this._passwordInput = input;
  };

  handlePasswordChanged = (password: string) => {
    this.setState({ password });
  };

  render() {
    const { email, password } = this.state;
    if (this.props.status === STATUS_LOADING && this.props.token)
      return (
        <View style={[styles.activityIndicator]}>
          <ActivityIndicator size="large" color={WHITE} />
        </View>
      );

    return (
      <Fragment>
        <View style={styles.loginTitle}>
          <View style={styles.loginTitleContent}>
            <Text style={styles.travelText}>TRĪS</Text>
          </View>
        </View>
        <View style={styles.loginInput}>
          <Input
            leftIcon={<Icon name="md-person" color="rgba(171, 189, 219, 1)" size={25} />}
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
            errorMessage={this.state.email_valid ? null : 'Please enter a valid email address'}
          />
          <Input
            leftIcon={<Icon name="md-lock" color="rgba(171, 189, 219, 1)" size={25} />}
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
        </View>
        {this.props.error && <Text style={styles.inputError}>{this.props.error}</Text>}
        <Button
          title="CONNEXION"
          onPress={this.handleSubmitLoginCredentials}
          loading={this.props.status === STATUS_LOADING}
          loadingProps={{ size: 'small', color: 'white' }}
          disabled={!this.state.password || !this.state.email}
          buttonStyle={styles.buttonLogin}
          containerStyle={styles.buttonLoginContainer}
          titleStyle={styles.buttonLoginTitle}
        />
        <View style={styles.footerView}>
          <Text style={styles.footerText}>Pas encore de compte ?</Text>
          <Button
            title="Inscription"
            clear
            activeOpacity={0.5}
            titleStyle={styles.buttonCreateTitle}
            containerStyle={styles.buttonCreateContainer}
            onPress={this.props.onNavigateRegister}
          />
        </View>
      </Fragment>
    );
  }
}

export default withNavigation(LoginForm);
