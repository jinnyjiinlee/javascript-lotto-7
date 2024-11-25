import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../Constant/messages.js';
import { PurchaseAmountValidator } from '../Validation/purchaseAmountValidator.js';

export class InputHandler {
  async getPurchaseAmountInput() {
    while (true) {
      try {
        const purchaseAmount = await Console.readLineAsync(
          INPUT_MESSAGES.PURCHASE_AMOUNT,
        );
        new PurchaseAmountValidator().validatePurchaseAmount(purchaseAmount);
        return purchaseAmount;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  // // TODO: 공부하기, 리턴할때는 await 생략 가능?
  // async getRacingCountInput() {
  //   return Console.readLineAsync(INPUT_MESSAGES.RACING_COUNT);
  // }
}
