export class BonusNumber {
  constructor(bonusNumber, winningNumbers) {
    winningNumbers = winningNumbers.split(',').map(Number);
    this.validate(bonusNumber, winningNumbers);
  }

  validate(bonusNumber, winningNumbers) {
    if (bonusNumber === '') {
      throw new Error('[ERROR] 빈 값을 입력하셨습니다.');
    }

    if (Number.isNaN(Number(bonusNumber))) {
      throw new Error('[ERROR] 숫자를 입력하지 않으셨습니다.');
    }

    if (
      winningNumbers.some(
        (winningNumber) => winningNumber === Number(bonusNumber),
      )
    ) {
      throw new Error('[ERROR] 당청 번호와 중복된 숫자를 입력하셨습니다.');
    }

    if (bonusNumber === 0 || bonusNumber > 45) {
      throw new Error('[ERROR] 1부터 45까지의 숫자가 아닙니다.');
    }
  }
}
