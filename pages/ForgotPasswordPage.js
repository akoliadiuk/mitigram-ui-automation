import Page from './Page';

export default class ForgotPasswordPage extends Page {
  #forgotPasswordform = this.page.locator('#login');
  alreadyHaveAccountLink = this.#forgotPasswordform.locator('a[href="/Account/Login"]');

  constructor(page) {
    super(page, 'https://marketplace.mitigram.com/Account/ForgotPassword');
    this.headerLogo = this.page.locator('#mainContainer a.logo img');
  }
}
