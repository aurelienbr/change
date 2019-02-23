//@flow
import * as mockData from '~services/__tests__/mock-data';
import { loginUser, refreshToken, registerUser } from '~services/authentication/authenticationService';
import Mock from '~services/__tests__/feathers-mock';

describe('sessionService', () => {
  describe('loginUser', () => {
    test('should log with good crendetials', async done => {
      const mock = new Mock();

      mock.post('/authentication', 200, {
        user: mockData.user,
        accessToken: mockData.accessToken
      });
      mock.options('/authentication', 204, { 'access-control-allow-headers': 'Authorization' });

      const { user, accessToken } = await loginUser('admin@admin.com', 'admin');
      expect(user).toBeTruthy();
      expect(accessToken).toBeTruthy();

      done();
    });
  });

  describe('refreshToken', () => {
    test('should log with good token', async done => {
      const mock = new Mock();

      mock.post('/authentication', 200, {
        user: mockData.user,
        accessToken: mockData.accessToken
      });
      mock.options('/authentication', 204, { 'access-control-allow-headers': 'Authorization' });

      const { user, accessToken } = await refreshToken(mockData.accessToken);
      expect(user).toBeTruthy();
      expect(accessToken).toBeTruthy();

      done();
    });
  });

  describe('registerUser', () => {
    test('should return user', async done => {
      const mock = new Mock();

      mock.post('/users', 200, {
        ...mockData.user
      });
      mock.options('/users', 204, { 'access-control-allow-headers': 'Authorization' });

      const { _id, email } = await registerUser(mockData.user.email, '');

      expect(_id).toBeTruthy();
      expect(email).toBeTruthy();

      done();
    });
  });
});
