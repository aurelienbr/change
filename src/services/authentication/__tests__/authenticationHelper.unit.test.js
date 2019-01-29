//@flow
import { handleLoginError } from 'services/authentication/authenticationHelper';

describe('authenticationHelper', () => {
  describe('handleLoginError', () => {
    test('should throw badcredentials if error code 401', async done => {
      new Promise((resolve, reject) => {
        reject({ code: 401 });
      })
        .catch(handleLoginError)
        .catch(e => {
          expect(e.message).toBe('app.form.login.error.badcredentials');
          done();
        });
    });
    test('should throw internet if Message is network error', async done => {
      new Promise((resolve, reject) => {
        reject({ message: 'Network Error' });
      })
        .catch(handleLoginError)
        .catch(e => {
          expect(e.message).toBe('app.form.login.error.internet');
          done();
        });
    });
    test('should throw unknow if no message or code', async done => {
      new Promise((resolve, reject) => {
        reject();
      })
        .catch(handleLoginError)
        .catch(e => {
          expect(e.message).toBe('app.form.login.error.unknow');
          done();
        });
    });
    test('should throw unknow otherwise', async done => {
      new Promise((resolve, reject) => {
        reject({});
      })
        .catch(handleLoginError)
        .catch(e => {
          expect(e.message).toBe('app.form.login.error.unknow');
          done();
        });
    });
  });
});
