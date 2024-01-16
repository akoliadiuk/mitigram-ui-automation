import Page from './Page';

export default class CareersPage extends Page {
  #openPositionsContainer = this.page.locator('#g-open-positions');
  footerContainer = this.page.locator('#g-footer');
  policiesText = this.footerContainer.locator('p.footerlink');
  privacyPolicyLink = this.footerContainer.locator('a[href="/privacy-policy"]');
  cookiePolicyLink = this.footerContainer.locator('a[href="/cookie-policy"]');
  openPositionsAnchor = this.page.locator('//a[@href="#open-positions"][text() = ' +
    '"Open positions"]');
  openPositionsFilters = this.#openPositionsContainer.locator('ul.jl-subnav');
  openPositionsItem = this.#openPositionsContainer.locator('//*[contains(@class, "tm-wrapper")]' +
    '[@data-tag]');

  constructor(page) {
    super(page, '/careers');
  }
}
