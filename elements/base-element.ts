import { expect, type Locator, type Page } from '@playwright/test';

export class BaseElement {
  constructor(
    protected readonly page: Page,
    readonly locator: string,
    readonly name: string,
  ) {}

  get typeOf(): string { return 'base element'; }

  getLocator(nth = 0): Locator {
    return this.page.locator(this.locator).nth(nth);
  }

  async click(nth = 0): Promise<void> {
    await this.getLocator(nth).click();
  }

  async checkVisible(nth = 0): Promise<void> {
    await expect(this.getLocator(nth)).toBeVisible();
  }

  async checkHaveText(text: string, nth = 0): Promise<void> {
    await expect(this.getLocator(nth)).toHaveText(text);
  }

  async checkHaveClass(expectedClass: string | RegExp, nth = 0): Promise<void> {
    await expect(this.getLocator(nth)).toHaveClass(expectedClass);
  }
}
