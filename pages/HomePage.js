import Page from './Page';

export default class HomePage extends Page {
  logInButton = this.page.locator('//*[@id = "g-navigation"]//a[text() = "Log in"]');
  
  constructor(page) {
    super(page, '/');
  }
}
