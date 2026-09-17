import { test as base, expect } from '@playwright/test';
import { CategoriesPage } from '../pages/CategoriesPage';
import { HomePage } from '../pages/HomePage';

export type Fixtures = {
  homePage: HomePage;
  categoriesPage: CategoriesPage;
};

export const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => { await use(new HomePage(page)); },
  categoriesPage: async ({ page }, use) => { await use(new CategoriesPage(page)); },
});

export { expect };
