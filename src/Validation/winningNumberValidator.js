export class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers.split(',').map(Number));
    this.#numbers = numbers;
  }

  isBlank(value) {
    return value[0] === 0;
  }

  isNotNumber(value) {
    return !Number.isNaN(Number(value));
  }

  isNotScope(value) {
    return value.some((number) => number < 0 || number > 45);
  }

  // eslint-disable-next-line max-lines-per-function
  validate(numbers) {
    if (this.isBlank(numbers)) {
      throw new Error('[ERROR] 빈 값을 입력하셨습니다.');
    }

    if (this.isNotNumber(numbers)) {
      throw new Error('[ERROR] 숫자를 입력하지 않으셨습니다.');
    }

    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (this.isNotScope(numbers)) {
      throw new Error('[ERROR] 1부터 45까지의 숫자가 아닙니다.');
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error('[ERROR] 중복된 숫자를 입력하셨습니다.');
    }
  }
}
