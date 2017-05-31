import { AngularLoginRegisterPage } from './app.po';

describe('angular-login-register App', () => {
  let page: AngularLoginRegisterPage;

  beforeEach(() => {
    page = new AngularLoginRegisterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
