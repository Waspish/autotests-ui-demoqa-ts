import { expect, type Page } from '@playwright/test';

export class BasePage {
  constructor(protected readonly page: Page) {}

  async visit(url = ''): Promise<void> {
    await this.page.goto(url, { waitUntil: 'networkidle' });
  }

  async checkCurrentUrl(expectedUrl: RegExp): Promise<void> {
    await expect(this.page).toHaveURL(expectedUrl);
  }
}
