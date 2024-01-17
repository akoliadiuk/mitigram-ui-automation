import Page from './Page';
import FooterComponent from './components/FooterComponent';
import HeaderMenuComponent from './components/HeaderMenuComponent';

export default class HomePage extends Page {
  headerMenu = new HeaderMenuComponent(this.page);
  footer = new FooterComponent(this.page);

  constructor(page) {
    super(page, '/');
  }
}
