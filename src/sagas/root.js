// @flow

import { fork, spawn, all } from 'redux-saga/effects';
import loginSaga from 'sagas/loginSaga.js';
import registerSaga from 'sagas/registerSaga.js';

export type GeneratorType = Generator<*, *, *>;

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
