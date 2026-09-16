import { type Page } from '@playwright/test';
import { BaseComponent } from './base-component';
import { Button } from '../elements/button';
import { Input } from '../elements/input';
import { TextArea } from '../elements/textarea';
import { Text } from '../elements/text';

export class MainTextBoxComponent extends BaseComponent {
  readonly title: Text;
  readonly fullNameInput: Input;
  readonly emailInput: Input;
  readonly currentAddressTextarea: TextArea;
  readonly permanentAddressTextarea: TextArea;
  readonly submitButton: Button;

  constructor(page: Page) {
    super(page);
    this.title = new Text(page, '//h1[text()="Text Box"]', 'Text Box');
    this.fullNameInput = new Input(page, '//input[@id="userName"]', 'Full Name');
    this.emailInput = new Input(page, '//input[@id="userEmail"]', 'Email');
    this.currentAddressTextarea = new TextArea(page, '//textarea[@id="currentAddress"]', 'Current Address');
    this.permanentAddressTextarea = new TextArea(page, '//textarea[@id="permanentAddress"]', 'Permanent Address');
    this.submitButton = new Button(page, '//button[@id="submit"]', 'Submit');
  }

  async checkVisible(fullName: string, email: string, currentAddress: string, permanentAddress: string): Promise<void> {
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

  async fill(fullName: string, email: string, currentAddress: string, permanentAddress: string): Promise<void> {
    await this.fullNameInput.fill(fullName);
    await this.emailInput.fill(email);
    await this.currentAddressTextarea.fill(currentAddress);
    await this.permanentAddressTextarea.fill(permanentAddress);
  }

  async clickSubmitButton(): Promise<void> { await this.submitButton.click(); }

  async checkEmailHasError(): Promise<void> {
    await this.emailInput.checkHaveClass(/field-error/);
  }
}
