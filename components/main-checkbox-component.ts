import { expect, type Page } from '@playwright/test';
import { BaseComponent } from './base-component';
import { CheckBox } from '../elements/checkbox';

export class MainCheckBoxComponent extends BaseComponent {
  readonly homeCheckBox: CheckBox;

  constructor(page: Page) {
    super(page);

    this.homeCheckBox = new CheckBox(
      page,
      '[role="checkbox"][aria-label="Select Home"]',
      'Home',
    );
  }

  async checkSelectedItems(items: string[]): Promise<void> {
    for (const item of items) {
      await expect(
        this.page.locator('#result .text-success', {
          hasText: item,
        }),
      ).toBeVisible();
    }
  }
}