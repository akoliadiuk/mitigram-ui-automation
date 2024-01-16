import { BASE_URL } from '../playwright.config';

export default class Page {
  #fullUrl;

  constructor(page, url) {
    this.page = page;
    this.url = url;
    this.headerLogo = this.page.locator('#g-navigation a img[src*="Miti-logo"]');
  }

  get url() {
    return this.#fullUrl;
  }

  set url(url) {
    this.#fullUrl = /(?:https?):\/\//.test(url) ? url : BASE_URL + (url ?? '/');
  }

  async open() {
    await this.page.goto(this.#fullUrl);
    await this.waitForLoaded();
    return this;
  }

  /**
   * @param {BrowserContext} actionCallback   action that triggers opening a new tab
   * @param {BrowserContext} browserContext   to handle new tab playwright page
   * @param {function} NewPageConstructor     to create a new tab Page Object
   * @return {object}                         an instance of a Page Object for the opened page
   */
  async openInNewTab(actionCallback, browserContext, NewPageConstructor) {
    const pagePromise = browserContext.waitForEvent('page');
    await actionCallback();
    const newPage = await pagePromise;
    return new NewPageConstructor(newPage);
  }

  async close() {
    await this.page.close();
  }

  async waitForLoaded(options = {}) {
    await this.page.waitForURL(this.#fullUrl + '**', options);
    return this;
  }

  async scrollToTheBottom() {
    await this.page.waitForLoadState();
    await this.page.keyboard.down('End');
  }

  async scrollOnePage() {
    await this.page.waitForLoadState();
    await this.page.keyboard.down('PageDown');
  }

  async goBack(options = {}) {
    await this.page.goBack(options);
  }
}
