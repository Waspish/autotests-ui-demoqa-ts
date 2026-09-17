import { expect } from '@playwright/test';
import { BaseElement } from './BaseElement';

export class CheckBox extends BaseElement {
  get typeOf(): string { return 'checkbox'; }

  async check(nth = 0): Promise<void> {
    await this.getLocator(nth).click();
  }

  async checkIsChecked(nth = 0): Promise<void> {
    await expect(this.getLocator(nth)).toHaveAttribute('aria-checked', 'true');
  }

  async checkIsNotChecked(nth = 0): Promise<void> {
    await expect(this.getLocator(nth)).toHaveAttribute('aria-checked', 'false');
  }
}