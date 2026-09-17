import { type Page } from '@playwright/test';
import { CategoryCardComponent } from '../components/CategoryCardComponent';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly elementsCard: CategoryCardComponent;
  constructor(page: Page) {
    super(page);
    this.elementsCard = new CategoryCardComponent(page, 'elements');
  }
}
