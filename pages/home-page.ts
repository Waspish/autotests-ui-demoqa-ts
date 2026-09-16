import { type Page } from '@playwright/test';
import { CategoryCardComponent } from '../components/category-card-component';
import { BasePage } from './base-page';

export class HomePage extends BasePage {
  readonly elementsCard: CategoryCardComponent;
  constructor(page: Page) {
    super(page);
    this.elementsCard = new CategoryCardComponent(page, 'elements');
  }
}
