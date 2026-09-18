import { type Page } from '@playwright/test';
import { BaseComponent } from './BaseComponent';
import { CategoryGroupComponentListItem } from './CategoryGroupComponentListItem';
import { BaseElement } from '../elements/BaseElement';

export class CategoryGroupComponent extends BaseComponent {
  readonly baseElement: BaseElement;
  readonly textBox: CategoryGroupComponentListItem;
  readonly checkBox: CategoryGroupComponentListItem;

  constructor(
    page: Page,
    readonly identifier: string,
  ) {
    super(page);

    this.baseElement = new BaseElement(page, `//div[text()="${identifier}"]`, identifier);

    this.textBox = new CategoryGroupComponentListItem(page, 'text-box');

    this.checkBox = new CategoryGroupComponentListItem(page, 'checkbox');
  }

  async checkVisible(): Promise<void> {
    await this.baseElement.checkVisible();
  }

  async click(): Promise<void> {
    await this.baseElement.click();
  }
}
