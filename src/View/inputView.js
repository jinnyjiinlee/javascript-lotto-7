import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../Constant/messages.js';

import { PurchaseAmount } from '../Validation/purchaseAmountValidator.js';
import { BonusNumber } from '../Validation/bonusNumberValidator.js';
import { WinningNumbers } from '../Validation/winningNumberValidator.js';

export class InputHandler {
  async getPurchaseAmountInput() {
    let isValid = false;
    while (!isValid) {
      this.purchaseAmount = await Console.readLineAsync(
        INPUT_MESSAGES.PURCHASE_AMOUNT,
      );
      try {
        isValid = new PurchaseAmount(this.purchaseAmount);
        return this.purchaseAmount;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  async getWinningNumbersInput() {
    let isValid = false;
    while (!isValid) {
      try {
        this.winningNumbers = await Console.readLineAsync(
          INPUT_MESSAGES.WINNING_NUMBERS,
        );
        const winningNumbersToArray = this.winningNumbers
          .split(',')
          .map(Number);
        isValid = new WinningNumbers(winningNumbersToArray);
        return this.winningNumbers;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  async getBonusNumberInput() {
    let isValid = false;
    while (!isValid) {
      try {
        this.bonusNumber = await Console.readLineAsync(
          INPUT_MESSAGES.BONUS_NUMBER,
        );
        const winningNumbersToArray = this.winningNumbers
          .split(',')
          .map(Number);
        isValid = new BonusNumber(this.bonusNumber, winningNumbersToArray);
        return this.bonusNumber;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }
}
