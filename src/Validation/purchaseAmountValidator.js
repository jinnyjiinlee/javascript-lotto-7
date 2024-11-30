export class PurchasePrice {
  constructor(purchasePrice) {
    this.validate(purchasePrice);
  }

  isBlank(value) {
    return value === '';
  }

  isNotNumber(value) {
    return Number.isNaN(Number(value));
  }

  isNotUnit(value) {
    return value % 1000 !== 0;
  }

  validate(purchasePrice) {
    if (this.isBlank(purchasePrice)) {
      throw new Error('[ERROR] 빈 값을 입력하셨습니다.');
    }

    if (this.isNotNumber(purchasePrice)) {
      throw new Error('[ERROR] 숫자를 입력하지 않으셨습니다.');
    }

    if (this.isNotUnit(purchasePrice)) {
      throw new Error('[ERROR] 1000원 단위가 아닙니다.');
    }
  }
}
