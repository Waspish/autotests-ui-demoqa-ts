import { type Page } from '@playwright/test';
import { CategoryGroupComponent } from '../components/category-group-component';
import { MainCheckBoxComponent } from '../components/main-checkbox-component';
import { MainTextBoxComponent } from '../components/main-text-box-component';
import { BasePage } from './base-page';

export class CategoriesPage extends BasePage {
  readonly elementsGroup: CategoryGroupComponent;
  readonly mainTextBox: MainTextBoxComponent;
  readonly mainCheckBox: MainCheckBoxComponent;

  constructor(page: Page) {
    super(page);

    this.elementsGroup = new CategoryGroupComponent(page, 'Elements');
    this.mainTextBox = new MainTextBoxComponent(page);
    this.mainCheckBox = new MainCheckBoxComponent(page);
  }
}