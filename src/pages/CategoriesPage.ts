import { type Page } from '@playwright/test';
import { CategoryGroupComponent } from '../components/CategoryGroupComponent';
import { MainCheckBoxComponent } from '../components/MainCheckboxComponent';
import { MainTextBoxComponent } from '../components/MainTextBoxComponent';
import { BasePage } from './BasePage';

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
