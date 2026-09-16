import { test } from '../../../fixtures/test';

test('selecting Home marks all child items', async ({
  homePage,
  categoriesPage,
}) => {
  await homePage.visit();

  await homePage.elementsCard.checkVisible();
  await homePage.elementsCard.click();

  await categoriesPage.elementsGroup.checkVisible();
  await categoriesPage.elementsGroup.checkBox.checkVisible();
  await categoriesPage.elementsGroup.checkBox.click();

  await categoriesPage.mainCheckBox.homeCheckBox.check();

  await categoriesPage.mainCheckBox.checkSelectedItems([
    'home',
    'desktop',
    'documents',
    'downloads',
    'notes',
    'commands',
    'workspace',
    'office',
    'wordFile',
    'excelFile',
    'react',
    'angular',
    'veu',
    'public',
    'private',
    'classified',
    'general',
  ]);
});