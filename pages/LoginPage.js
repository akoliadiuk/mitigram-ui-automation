import Page from './Page';

export default class LoginPage extends Page {
  #loginForm = this.page.locator('form#mainForm');
  emailField = this.#loginForm.locator('input[placeholder="Email"]');
  passwordField = this.#loginForm.locator('input[placeholder="Password"]');
  loginButton = this.#loginForm.locator('//button[@id = "loginBtn"]//*[text() = "Log in"]');
  forgotPasswordLink = this.#loginForm.locator('//a[text() = "Forgot your password?"]');
  contactUsLink = this.page.locator('.registration-call').locator('//a[text() = "Contact us"]');
  validationError = this.#loginForm.locator('.error');

  constructor(page) {
    super(page, 'https://marketplace.mitigram.com/Account/Login');
    this.headerLogo = this.page.locator('#mainContainer a.logo img');
  }
}
