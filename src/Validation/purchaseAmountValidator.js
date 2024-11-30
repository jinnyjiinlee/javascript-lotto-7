export class purchasePrice {
  constructor(purchasePrice) {
    this.validate(purchasePrice);
  }

  validate(purchasePrice) {
    if (purchasePrice === '') {
      throw new Error('[ERROR] 빈 값을 입력하셨습니다.');
    }

    if (Number.isNaN(Number(purchasePrice))) {
      throw new Error('[ERROR] 숫자를 입력하지 않으셨습니다.');
    }

    if (purchasePrice % 1000 !== 0) {
      throw new Error('[ERROR] 1000원 단위가 아닙니다.');
    }
  }
}
