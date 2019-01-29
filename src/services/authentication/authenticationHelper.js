// @flow
// eslint-disable-next-line
export function handleLoginError(error: any) {
  let errorMessage: string = '';
  try {
    if (error.code === 401) errorMessage = 'app.form.login.error.badcredentials';
    if (error.message === 'Network Error') errorMessage = 'app.form.login.error.internet';
  } catch (e) {
    throw new Error('app.form.login.error.unknow');
  }
  throw new Error(errorMessage === '' ? 'app.form.login.error.unknow' : errorMessage);
}
