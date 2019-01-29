// @flow
import React from 'react';
import { createMockStore } from 'redux-test-utils';
import { STATUS_START } from 'constants/statusConstants';
import { Provider } from 'react-redux';

const store = createMockStore({
  login: {
    user: {
      pseudo: '',
      email: '',
      password: '',
      firstname: '',
      lastname: ''
    },
    token: '',
    error: '',
    status: STATUS_START
  },
  register: {
    status: STATUS_START,
    email: '',
    password: ''
  },
  locale: {
    language: 'en'
  }
});

export default function withStore(children: any) {
  return <Provider store={store}>{children}</Provider>;
}
