import { expect } from '@playwright/test';
import { BaseElement } from './BaseElement';

export class TextArea extends BaseElement {
  get typeOf(): string { return 'textarea'; }

  async fill(value: string, nth = 0): Promise<void> {
    await this.getLocator(nth).fill(value);
  }

  async checkHaveValue(value: string, nth = 0): Promise<void> {
    await expect(this.getLocator(nth)).toHaveValue(value);
  }
}
