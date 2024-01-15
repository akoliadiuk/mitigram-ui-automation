import Page from './Page';

export default class LoginPage extends Page {
  #loginForm = this.page.locator('#mainForm #login');
  emailField = this.#loginForm.locator('input[placeholder="Email"]');
  passwordField = this.#loginForm.locator('input[placeholder="Password"]');
  loginButton = this.#loginForm.locator('#loginBtn');
  
  constructor(page) {
    super(page, 'https://marketplace.mitigram.com/Account/Login');
    this.headerLogo = this.page.locator('#mainContainer a.logo img');
  }
}
