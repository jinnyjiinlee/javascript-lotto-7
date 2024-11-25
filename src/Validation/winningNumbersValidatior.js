export class WinningNumbersValidator {
  validateWinningNumbers(winningNumbers) {
    this.winningNumbers = winningNumbers.split(',');
    this.winningNumbers = this.winningNumbers.map(Number);
    
    this.getValidationChecks().forEach((arr) => {
      if (arr[0]) throw new Error(arr[1]);
    });

    return true;
  }

  isEmpty() {
    return this.winningNumbers[0] === '';
  }

  isStringNumeric() {
    return this.winningNumbers.some((number) => Number.isNaN(Number(number)));
  }

  isNotScope() {
    return this.winningNumbers.some((number) => number === 0 || number > 45);
  }

  isSixDigits() {
    return this.winningNumbers.length !== 6;
  }

  checkDuplicatedDigits() {
    const uniqueWinningNumber = new Set(this.winningNumbers);
    if (uniqueWinningNumber.size !== this.winningNumbers.length) return true;
  }

  // TODO: 리펙토링 - 상수처리
  getValidationChecks() {
    return [
      [this.isEmpty(), '[ERROR] 빈 값을 입력하셨습니다.'],
      [this.isStringNumeric(), '[ERROR] 숫자를 입력하지 않으셨습니다.'],
      [this.isNotScope(), '[ERROR] 1부터 45까지의 숫자가 아닙니다.'],
      [this.isSixDigits(), '[ERROR] 숫자 6개를 입력하지 않으셨습니다.'],
      [this.checkDuplicatedDigits(), '[ERROR] 중복된 숫자를 입력하셨습니다.'],
    ];
  }
}
