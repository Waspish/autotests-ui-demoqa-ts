import { test } from '../../../fixtures/test';

test('text box is filled successfully', async ({ homePage, categoriesPage }) => {
  await homePage.visit();
  await homePage.elementsCard.checkVisible();
  await homePage.elementsCard.click();

  await categoriesPage.elementsGroup.checkVisible();
  await categoriesPage.elementsGroup.textBox.checkVisible();
  await categoriesPage.elementsGroup.textBox.click();

  await categoriesPage.mainTextBox.checkVisible('', '', '', '');
  await categoriesPage.mainTextBox.fill(
    'Andrei',
    'ostap@mail.ru',
    'derzh 3',
    'kaputcha 17',
  );
  await categoriesPage.mainTextBox.checkVisible(
    'Andrei',
    'ostap@mail.ru',
    'derzh 3',
    'kaputcha 17',
  );
  await categoriesPage.mainTextBox.clickSubmitButton();
});

test('invalid email is rejected', async ({
  homePage,
  categoriesPage,
}) => {
  await homePage.visit();

  await homePage.elementsCard.checkVisible();
  await homePage.elementsCard.click();

  await categoriesPage.elementsGroup.checkVisible();
  await categoriesPage.elementsGroup.textBox.checkVisible();
  await categoriesPage.elementsGroup.textBox.click();

  await categoriesPage.mainTextBox.checkVisible('', '', '', '');

  await categoriesPage.mainTextBox.fill(
    'Andrei',
    'invalid-email',
    'derzh 3',
    'kaputcha 17',
  );

  await categoriesPage.mainTextBox.clickSubmitButton();

  await categoriesPage.mainTextBox.checkEmailHasError();
});
