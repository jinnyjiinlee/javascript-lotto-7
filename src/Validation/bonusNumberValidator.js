export class BonusNumberValidator {
  validateBonusNumber(bonusNumber, winningNumbers) {
    this.bonusNumber = bonusNumber;
    this.winningNumbers = winningNumbers.split(',');
    this.winningNumbers = this.winningNumbers.map(Number);

    this.getValidationChecks().forEach((arr) => {
      if (arr[0]) throw new Error(arr[1]);
    });

    return true;
  }

  isEmpty() {
    return this.bonusNumber === '';
  }

  isNotStringNumeric() {
    return Number.isNaN(Number(this.bonusNumber));
  }

  isNotScope() {
    return Number(this.bonusNumber) === 0 || Number(this.bonusNumber) > 45;
  }

  isDuplicateWithWinningNumber() {
    return this.winningNumbers.some(
      (number) => number === Number(this.bonusNumber),
    );
  }

  // TODO: 리펙토링 - 상수처리
  getValidationChecks() {
    return [
      [this.isEmpty(), '[ERROR] 빈 값을 입력하셨습니다.'],
      [this.isNotStringNumeric(), '[ERROR] 숫자를 입력하지 않으셨습니다.'],
      [
        this.isNotScope(),
        '[ERROR] 1부터 45사이 범위를 넘어가는 숫자를 입력하셨습니다.',
      ],
      [this.isDuplicateWithWinningNumber(), '[ERROR] 당첨 번호와 보너스 넘버가 중복됩니다.'],
    ];
  }
}
