// @flow
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export function registerUser(email: string, password: string) {
  return {
    type: REGISTER_START,
    payload: {
      email,
      password
    }
  };
}

export function userRegisterFailed(error: string) {
  return {
    type: REGISTER_SUCCESS,
    payload: {
      error
    }
  };
}

export function userRegisterSuccess() {
  return {
    type: REGISTER_SUCCESS
  };
}
