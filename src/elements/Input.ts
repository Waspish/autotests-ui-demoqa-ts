import { expect } from '@playwright/test';
import { BaseElement } from './BaseElement';

export class Input extends BaseElement {
  get typeOf(): string {
    return 'input';
  }

  async fill(value: string, nth = 0): Promise<void> {
    await this.getLocator(nth).fill(value);
  }

  async checkHaveValue(value: string, nth = 0): Promise<void> {
    await expect(this.getLocator(nth)).toHaveValue(value);
  }
}
