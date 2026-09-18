import { test } from '../../../src/fixtures/test';

test('text box is filled successfully', async ({ homePage, categoriesPage }) => {
  const fullName = 'Andrei';
  const email = 'ostap@mail.ru';
  const currentAddress = 'derzh 3';
  const permanentAddress = 'kaputcha 17';

  await homePage.visit();

  await homePage.elementsCard.checkVisible();
  await homePage.elementsCard.click();

  await categoriesPage.elementsGroup.checkVisible();
  await categoriesPage.elementsGroup.textBox.checkVisible();
  await categoriesPage.elementsGroup.textBox.click();

  await categoriesPage.mainTextBox.checkVisible('', '', '', '');

  await categoriesPage.mainTextBox.fill(fullName, email, currentAddress, permanentAddress);

  await categoriesPage.mainTextBox.checkVisible(fullName, email, currentAddress, permanentAddress);

  await categoriesPage.mainTextBox.clickSubmitButton();

  await categoriesPage.mainTextBox.checkOutput(fullName, email, currentAddress, permanentAddress);
});

test('invalid email is rejected', async ({ homePage, categoriesPage }) => {
  await homePage.visit();

  await homePage.elementsCard.checkVisible();
  await homePage.elementsCard.click();

  await categoriesPage.elementsGroup.checkVisible();
  await categoriesPage.elementsGroup.textBox.checkVisible();
  await categoriesPage.elementsGroup.textBox.click();

  await categoriesPage.mainTextBox.checkVisible('', '', '', '');

  await categoriesPage.mainTextBox.fill('Andrei', 'invalid-email', 'derzh 3', 'kaputcha 17');

  await categoriesPage.mainTextBox.clickSubmitButton();

  await categoriesPage.mainTextBox.checkEmailHasError();
});
