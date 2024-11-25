import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../Constant/messages.js';
import { PurchaseAmountValidator } from '../Validation/purchaseAmountValidator.js';
import { WinningNumbersValidator } from '../Validation/winningNumbersValidatior.js';
import { BonusNumberValidator } from '../Validation/bonusNumberValidator.js';

export class InputHandler {
  constructor() {
    this.purchaseAmount = null;
    this.winningNumbers = null;
    this.bonusNumber = null;

    this.purchaseAmountValidator = new PurchaseAmountValidator();
    this.winningNumbersValidator = new WinningNumbersValidator();
    this.bonusNumberValidator = new BonusNumberValidator();
  }

  async getPurchaseAmountInput() {
    while (true) {
      try {
        this.purchaseAmount = await Console.readLineAsync(
          INPUT_MESSAGES.PURCHASE_AMOUNT,
        );
        this.purchaseAmountValidator.validatePurchaseAmount(
          this.purchaseAmount,
        );
        return this.purchaseAmount;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  async getWinningNumbersInput() {
    while (true) {
      try {
        this.winningNumbers = await Console.readLineAsync(
          INPUT_MESSAGES.WINNING_NUMBERS,
        );
        this.winningNumbersValidator.validateWinningNumbers(
          this.winningNumbers,
        );
        return this.winningNumbers;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  async getBonusNumberInput() {
    while (true) {
      try {
        this.bonusNumber = await Console.readLineAsync(
          INPUT_MESSAGES.BONUS_NUMBER,
        );
        this.bonusNumberValidator.validateBonusNumber(this.bonusNumber, this.winningNumbers);
        return this.bonusNumber;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }
}
