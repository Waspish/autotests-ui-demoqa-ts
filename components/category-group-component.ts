import { type Page } from '@playwright/test';
import { BaseComponent } from './base-component';
import { CategoryGroupComponentListItem } from './category-group-component-list-item';
import { BaseElement } from '../elements/base-element';

export class CategoryGroupComponent extends BaseComponent {
  readonly baseElement: BaseElement;
  readonly textBox: CategoryGroupComponentListItem;
  readonly checkBox: CategoryGroupComponentListItem;

  constructor(page: Page, readonly identifier: string) {
    super(page, identifier);

    this.baseElement = new BaseElement(
      page,
      `//div[text()="${identifier}"]`,
      identifier,
    );

    this.textBox = new CategoryGroupComponentListItem(
      page,
      'text-box',
    );

    this.checkBox = new CategoryGroupComponentListItem(
      page,
      'checkbox',
    );
  }

  async checkVisible(): Promise<void> {
    await this.baseElement.checkVisible();
  }

  async click(): Promise<void> {
    await this.baseElement.click();
  }
}