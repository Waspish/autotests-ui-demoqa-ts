import { type Page } from '@playwright/test';
import { BaseComponent } from './BaseComponent';
import { Link } from '../elements/Link';

export class CategoryGroupComponentListItem extends BaseComponent {
  readonly link: Link;

  constructor(
    page: Page,
    readonly identifier: string,
  ) {
    super(page);
    this.link = new Link(page, `//a[@href="/${identifier}"]`, identifier);
  }

  async checkVisible(): Promise<void> {
    await this.link.checkVisible();
  }

  async click(): Promise<void> {
    await this.link.click();
    await this.checkCurrentUrl(new RegExp(`.*/(${this.identifier})`));
  }
}
