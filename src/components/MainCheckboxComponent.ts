import { expect, type Page } from '@playwright/test';
import { BaseComponent } from './BaseComponent';
import { CheckBox } from '../elements/Checkbox';

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