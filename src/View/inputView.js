import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../Constant/messages.js';

export class InputHandler {
  async getPurchaseAmountInput() {
    return Console.readLineAsync(INPUT_MESSAGES.PURCHASE_AMOUNT);
  }

  // // TODO: 공부하기, 리턴할때는 await 생략 가능?
  // async getRacingCountInput() {
  //   return Console.readLineAsync(INPUT_MESSAGES.RACING_COUNT);
  // }
}
