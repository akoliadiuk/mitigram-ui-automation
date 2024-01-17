import Component from './Component';

export default class FooterComponent extends Component {
  footerContainer = this.page.locator('#g-footer');
  policiesText = this.footerContainer.locator('p.footerlink');
  privacyPolicyLink = this.footerContainer.locator('a[href="/privacy-policy"]');
  cookiePolicyLink = this.footerContainer.locator('a[href="/cookie-policy"]');
}
