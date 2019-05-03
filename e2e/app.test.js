/* eslint-env detox/detox, jest */

describe('App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have login as home screen', async () => {
    await expect(element(by.id('login'))).toBeVisible();
  });
});
