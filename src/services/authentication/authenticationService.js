// @flow
import api, { users as UserService } from 'services/api';
import { handleLoginError } from 'services/authentication/authenticationHelper';

export function loginUser(email: string, password: string): Promise<*> {
  return api
    .authenticate({
      strategy: 'local',
      email,
      password
    })
    .catch(handleLoginError);
}

export function refreshToken(accessToken: string): Promise<*> {
  return api
    .authenticate({
      strategy: 'jwt',
      accessToken
    })
    .catch(handleLoginError);
}

export function registerUser(email: string, password: string): Promise<*> {
  return UserService.create({ email, password }).catch(handleLoginError);
}
