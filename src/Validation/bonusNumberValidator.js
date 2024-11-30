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
      throw new Error('[ERROR] 빈 값을 입력하셨습니다.');
    }

    if (this.isNotNumber(bonusNumber)) {
      throw new Error('[ERROR] 숫자를 입력하지 않으셨습니다.');
    }

    if (this.isNotScope(bonusNumber)) {
      throw new Error('[ERROR] 1부터 45까지의 숫자가 아닙니다.');
    }

    if (
      winningNumbers.some(
        (winningNumber) => winningNumber === Number(bonusNumber),
      )
    ) {
      throw new Error('[ERROR] 당청 번호와 중복된 숫자를 입력하셨습니다.');
    }
  }
}
