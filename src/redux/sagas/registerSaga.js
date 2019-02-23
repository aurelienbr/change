// @flow

import { takeLatest, put, call } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import * as sessionService from '~services/authentication/authenticationService';
import { REGISTER_START, userRegisterSuccess, userRegisterFailed } from '~actions/registerActions';
import type { GeneratorType } from '~types/Saga';

export default function* registerSaga(): GeneratorType {
  yield takeLatest(REGISTER_START, registerUser);
}

function* registerUser(action): Saga<void> {
  const { email, password } = action.payload;
  try {
    yield call(sessionService.registerUser, email, password);
    yield put(userRegisterSuccess());
  } catch (e) {
    yield put(userRegisterFailed(e.message));
  }
}
