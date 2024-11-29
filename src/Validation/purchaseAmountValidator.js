export class PurchaseAmount {
  constructor(purchaseAmount) {
    this.validate(purchaseAmount);
  }

  validate(purchaseAmount) {
    if (purchaseAmount === '') {
      throw new Error('[ERROR] 빈 값을 입력하셨습니다.');
    }

    if (Number.isNaN(Number(purchaseAmount))) {
      throw new Error('[ERROR] 숫자를 입력하지 않으셨습니다.');
    }

    if (purchaseAmount % 1000 !== 0) {
      throw new Error('[ERROR] 1000원 단위가 아닙니다.');
    }
  }
}
