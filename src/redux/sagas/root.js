// @flow

import { all, fork, spawn } from 'redux-saga/effects';
import loginSaga from '~sagas/loginSaga.js';
import registerSaga from '~sagas/registerSaga.js';
import type { GeneratorType } from '~types/Saga';

export default function*(): GeneratorType {
  yield fork(bootstrap);
}

function* bootstrap(): GeneratorType {
  try {
    yield all([spawn(loginSaga), spawn(registerSaga)]);
  } catch (e) {
    // @TODO
  }
}
