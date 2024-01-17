import Page from './Page';
import FooterComponent from './components/FooterComponent';
import HeaderMenuComponent from './components/HeaderMenuComponent';

export default class CareersPage extends Page {
  headerMenu = new HeaderMenuComponent(this.page);
  footer = new FooterComponent(this.page);
  #openPositionsContainer = this.page.locator('#g-open-positions');
  openPositionsAnchor = this.page.locator('//a[@href="#open-positions"][text() = ' +
    '"Open positions"]');
  openPositionsFilters = this.#openPositionsContainer.locator('ul.jl-subnav');
  openPositionsItem = this.#openPositionsContainer.locator('//*[contains(@class, "tm-wrapper")]' +
    '[@data-tag]');

  constructor(page) {
    super(page, '/careers');
  }
}
