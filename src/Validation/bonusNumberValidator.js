import { ERROR_MESSAGES } from '../Constant/errorMessages.js';

/* eslint-disable max-lines-per-function */
export class BonusNumber {
  constructor(bonusNumber, winningNumbers) {
    this.validate(bonusNumber, winningNumbers);
  }

  isBlank(value) {
    return value === '';
  }

  isNotNumber(value) {
    return Number.isNaN(Number(value));
  }

  isNotScope(value) {
    return value === 0 || value > 45;
  }

  validate(bonusNumber, winningNumbers) {
    if (this.isBlank(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.COMMON.BLANK);
    }

    if (this.isNotNumber(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.COMMON.NOT_NUMBER);
    }

    if (this.isNotScope(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.COMMON.NOT_SCOPE);
    }

    if (
      winningNumbers.some(
        (winningNumber) => winningNumber === Number(bonusNumber),
      )
    ) {
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER.DUPLICATION);
    }
  }
}
