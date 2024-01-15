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
    await this.page.waitForLoadState();
    return this;
  }

  async close() {
    await this.page.close();
  }
}
