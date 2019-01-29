// @flow
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export type REGISTER_START_ACTION = {
  type: 'REGISTER_START',
  payload: {
    email: string,
    password: string
  }
};

export type REGISTER_FAILURE_ACTION = {
  type: 'REGISTER_FAILURE',
  payload: {
    error: string
  }
};

export type REGISTER_SUCCESS_ACTION = {
  type: 'REGISTER_SUCCESS'
};

export type Action = REGISTER_START_ACTION | REGISTER_FAILURE_ACTION | REGISTER_SUCCESS_ACTION;

export function registerUser(email: string, password: string): REGISTER_START_ACTION {
  return {
    type: REGISTER_START,
    payload: {
      email,
      password
    }
  };
}

export function userRegisterFailed(error: string): REGISTER_SUCCESS_ACTION {
  return {
    type: REGISTER_SUCCESS,
    payload: {
      error
    }
  };
}

export function userRegisterSuccess(): REGISTER_SUCCESS_ACTION {
  return {
    type: REGISTER_SUCCESS
  };
}
