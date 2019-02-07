// @flow

import { takeLatest, put, call } from 'redux-saga/effects';
import { LOGIN_START, LOGIN_TOKEN_START, userLoginSuccess, userLoginFailed } from 'actions/loginActions';
import * as sessionService from 'services/authentication/authenticationService';
import type { Saga } from 'redux-saga';
import type { GeneratorType } from 'sagas/root';
// import { SubmissionError } from 'redux-form';

export default function* loginSaga(): GeneratorType {
  yield takeLatest(LOGIN_START, loginUser);
  yield takeLatest(LOGIN_TOKEN_START, loginUserWithToken);
}

function* loginUser(action): Saga<void> {
  const { email, password } = action.payload;
  try {
    const { user, accessToken } = yield call(sessionService.loginUser, email, password);
    yield put(userLoginSuccess(user, accessToken));
  } catch (e) {
    yield put(userLoginFailed(e.message));
  }
}

function* loginUserWithToken(action): Saga<void> {
  const { token } = action.payload;
  try {
    const { user, accessToken } = yield call(sessionService.refreshToken, token);
    yield put(userLoginSuccess(user, accessToken));
  } catch (e) {
    yield put(userLoginFailed(e.message));
  }
}
