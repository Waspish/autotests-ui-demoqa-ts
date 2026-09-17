import { expect } from '@playwright/test';
import { BaseElement } from './BaseElement';

export class Button extends BaseElement {
  get typeOf(): string { return 'button'; }

  async checkEnabled(nth = 0): Promise<void> { await expect(this.getLocator(nth)).toBeEnabled(); }
  async checkDisabled(nth = 0): Promise<void> { await expect(this.getLocator(nth)).toBeDisabled(); }
}
