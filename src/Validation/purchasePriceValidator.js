import { ERROR_MESSAGES } from '../Constant/errorMessages.js';

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
      throw new Error(ERROR_MESSAGES.COMMON.BLANK);
    }

    if (this.isNotNumber(purchasePrice)) {
      throw new Error(ERROR_MESSAGES.COMMON.NOT_NUMBER);
    }

    if (this.isNotUnit(purchasePrice)) {
      throw new Error(ERROR_MESSAGES.PURCHASE_PRICE.NOT_UNIT);
    }
  }
}
