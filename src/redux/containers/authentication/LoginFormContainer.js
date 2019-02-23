// @flow
import { connect } from 'react-redux';

import LoginForm from '~components/authentication/LoginForm';
import { loginUser, loginUserWithToken } from '~actions/loginActions';

import type { DispatchType, StateType } from '~types/Actions';
import type { StateProps, DispatchProps } from '~components/authentication/LoginForm';
// import { setLanguage } from 'actions/localeActions';

export default connect(
  (state: StateType): StateProps => ({
    status: state.login.status,
    error: state.login.error,
    token: state.login.token
    // currentLanguage: state.locale.language
  }),
  (dispatch: DispatchType): DispatchProps => ({
    loginUser: (email: string, password: string) => dispatch(loginUser(email, password)),
    loginUserWithToken: (token: string) => dispatch(loginUserWithToken(token))
    // setCurrentLanguage: (language: string) => dispatch(setLanguage(language))
  })
)(LoginForm);
