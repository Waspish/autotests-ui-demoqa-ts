import { expect, type Page } from '@playwright/test';

export class BaseComponent {
  constructor(protected readonly page: Page) {}

  async checkCurrentUrl(expectedUrl: RegExp): Promise<void> {
    await expect(this.page).toHaveURL(expectedUrl);
  }
}
