import Component from './Component';

export default class HeaderMenuComponent extends Component {
  headerContainer = this.page.locator('#g-navigation');
  logInButton = this.page.locator('//*[@id = "g-navigation"]//a[text() = "Log in"]');
}
