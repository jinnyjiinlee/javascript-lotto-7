import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../Constant/messages.js';

import { PurchaseAmount } from '../Validation/purchaseAmountValidator.js';
import { BonusNumber } from '../Validation/bonusNumberValidator.js';
import { Lotto } from '../Validation/winningNumberValidator.js';

export class InputHandler {
  constructor() {
    this.winningNumber = null;
  }

  async getPurchaseAmountInput() {
    const inputMessage = INPUT_MESSAGES.PURCHASE_AMOUNT;
    return this.validate(PurchaseAmount, inputMessage);
  }

  async getWinningNumbersInput() {
    const inputMessage = INPUT_MESSAGES.WINNING_NUMBERS;
    // 입력된 당첨 번호 문자열 저장
    this.winningNumbers = await this.validate(Lotto, inputMessage);

    return this.winningNumbers;
  }

  async validate(ValidationClass, message) {
    let isValid = false;
    while (!isValid) {
      const input = await Console.readLineAsync(message);
      try {
        isValid = new ValidationClass(input);
        return input;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  // async getWinningNumbersInput() {
  //   let isValid = false;
  //   while (!isValid) {
  //     try {
  //       this.winningNumbers = await Console.readLineAsync(
  //         INPUT_MESSAGES.WINNING_NUMBERS,
  //       );
  //       const winningNumbersToArray = this.winningNumbers
  //         .split(',')
  //         .map(Number);
  //       isValid = new WinningNumbers(winningNumbersToArray);
  //       return this.winningNumbers;
  //     } catch (e) {
  //       Console.print(e.message);
  //     }
  //   }
  // }

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
