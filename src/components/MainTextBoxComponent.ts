import { type Page } from '@playwright/test';
import { BaseComponent } from './BaseComponent';
import { Button } from '../elements/Button';
import { Input } from '../elements/Input';
import { TextArea } from '../elements/Textarea';
import { Text } from '../elements/Text';

export class MainTextBoxComponent extends BaseComponent {
  readonly title: Text;
  readonly fullNameInput: Input;
  readonly emailInput: Input;
  readonly currentAddressTextarea: TextArea;
  readonly permanentAddressTextarea: TextArea;
  readonly submitButton: Button;
  readonly output: Text;
  readonly outputName: Text;
  readonly outputEmail: Text;
  readonly outputCurrentAddress: Text;
  readonly outputPermanentAddress: Text;

  constructor(page: Page) {
    super(page);
    this.title = new Text(page, '//h1[text()="Text Box"]', 'Text Box');
    this.fullNameInput = new Input(page, '//input[@id="userName"]', 'Full Name');
    this.emailInput = new Input(page, '//input[@id="userEmail"]', 'Email');
    this.currentAddressTextarea = new TextArea(
      page,
      '//textarea[@id="currentAddress"]',
      'Current Address',
    );
    this.permanentAddressTextarea = new TextArea(
      page,
      '//textarea[@id="permanentAddress"]',
      'Permanent Address',
    );
    this.submitButton = new Button(page, '//button[@id="submit"]', 'Submit');
    this.output = new Text(page, '//div[@id="output"]', 'Output');

    this.outputName = new Text(page, '//p[@id="name"]', 'Output Name');

    this.outputEmail = new Text(page, '//p[@id="email"]', 'Output Email');

    this.outputCurrentAddress = new Text(
      page,
      '//p[@id="currentAddress"]',
      'Output Current Address',
    );

    this.outputPermanentAddress = new Text(
      page,
      '//p[@id="permanentAddress"]',
      'Output Permanent Address',
    );
  }

  async checkVisible(
    fullName: string,
    email: string,
    currentAddress: string,
    permanentAddress: string,
  ): Promise<void> {
    await this.title.checkVisible();
    await this.title.checkHaveText('Text Box');
    await this.fullNameInput.checkVisible();
    await this.fullNameInput.checkHaveValue(fullName);
    await this.emailInput.checkVisible();
    await this.emailInput.checkHaveValue(email);
    await this.currentAddressTextarea.checkVisible();
    await this.currentAddressTextarea.checkHaveValue(currentAddress);
    await this.permanentAddressTextarea.checkVisible();
    await this.permanentAddressTextarea.checkHaveValue(permanentAddress);
    await this.submitButton.checkVisible();
  }

  async fill(
    fullName: string,
    email: string,
    currentAddress: string,
    permanentAddress: string,
  ): Promise<void> {
    await this.fullNameInput.fill(fullName);
    await this.emailInput.fill(email);
    await this.currentAddressTextarea.fill(currentAddress);
    await this.permanentAddressTextarea.fill(permanentAddress);
  }

  async clickSubmitButton(): Promise<void> {
    await this.submitButton.click();
  }

  async checkEmailHasError(): Promise<void> {
    await this.emailInput.checkHaveClass(/field-error/);
  }

  async checkOutput(
    fullName: string,
    email: string,
    currentAddress: string,
    permanentAddress: string,
  ): Promise<void> {
    await this.output.checkVisible();

    await this.outputName.checkHaveText(`Name:${fullName}`);
    await this.outputEmail.checkHaveText(`Email:${email}`);
    await this.outputCurrentAddress.checkHaveText(`Current Address :${currentAddress}`);
    await this.outputPermanentAddress.checkHaveText(`Permananet Address :${permanentAddress}`);
  }
}
