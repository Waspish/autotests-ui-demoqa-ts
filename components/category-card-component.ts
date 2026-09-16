import { BaseComponent } from './base-component';
import { Link } from '../elements/link';

export class CategoryCardComponent extends BaseComponent {
  readonly link: Link;

  constructor(page: import('@playwright/test').Page, readonly identifier: string) {
    super(page);
    this.link = new Link(page, `//a[@href="/${identifier}"]`, identifier);
  }

  async checkVisible(): Promise<void> { await this.link.checkVisible(); }

  async click(): Promise<void> {
    await this.link.click();
    await this.checkCurrentUrl(new RegExp(`.*/(${this.identifier})`));
  }
}
