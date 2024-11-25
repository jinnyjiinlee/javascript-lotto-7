export class BonusNumberValidator {
  validateBonusNumber(bonusNumber) {
    this.bonusNumber = bonusNumber;

    this.getValidationChecks().forEach((arr) => {
      if (arr[0]) throw new Error(arr[1]);
    });

    return true;
  }

  isEmpty() {
    return this.bonusNumber === '';
  }

  // TODO: 배열 하나씩 돌면서 검사하기
  isNotStringNumeric() {
    return Number.isNaN(Number(this.bonusNumber));
  }

  isNotScope() {
    return Number(this.bonusNumber) === 0 || Number(this.bonusNumber) > 45;
  }

  // // TODO: 정리해서 공부하기 every 가 아니라 some
  // hasNumericCharacters() {
  //   return this.parseCarNames.some((carName) => /\d/.test(carName));
  // }

  // isValidLength() {
  //   return this.parseCarNames.some((carName) => carName.length > 5);
  // }

  // TODO: 리펙토링 - 상수처리
  getValidationChecks() {
    return [
      [this.isEmpty(), '[ERROR] 빈 값을 입력하셨습니다.'],
      [this.isNotStringNumeric(), '[ERROR] 숫자를 입력하지 않으셨습니다.'],
      [
        this.isNotScope(),
        '[ERROR] 1부터 45사이 범위를 넘어가는 숫자를 입력하셨습니다.',
      ],
    ];
  }
}
