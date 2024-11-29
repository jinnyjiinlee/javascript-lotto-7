import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../Constant/messages.js';

import { PurchaseAmount } from '../Validation/purchaseAmountValidator.js';
import { BonusNumber } from '../Validation/bonusNumberValidator.js';
import { WinningNumbers }  from '../Validation/winningNumberValidator.js';

export class InputHandler {
  constructor() {
    this.purchaseAmount = null;
    this.winningNumbers = null;
    this.bonusNumber = null;
  }

  // while 반복문 조건값이 true일 때, while문을 실행한다.
  async getPurchaseAmountInput() {
    let validation = false;
    while (!validation) {
      this.purchaseAmount = await Console.readLineAsync(
        INPUT_MESSAGES.PURCHASE_AMOUNT,
      );
      try {
        validation = new PurchaseAmount(this.purchaseAmount);
        return this.purchaseAmount;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  // while 반복문 조건값이 true일 때, while문을 실행한다.
  async getWinningNumbersInput() {
    let validation = false;
    while (!validation) {
      try {
        this.winningNumbers = await Console.readLineAsync(
          INPUT_MESSAGES.WINNING_NUMBERS,
        );
        validation = new WinningNumbers(this.winningNumbers.split(',').map(Number));
        return this.winningNumbers;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  async getBonusNumberInput() {
    let validation = false;
    while (!validation) {
      try {
        this.bonusNumber = await Console.readLineAsync(
          INPUT_MESSAGES.BONUS_NUMBER,
        );
        validation = new BonusNumber(this.bonusNumber, this.winningNumbers);
        return this.bonusNumber;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }
}
