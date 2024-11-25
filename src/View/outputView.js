import { Console } from '@woowacourse/mission-utils';
// import { INPUT_MESSAGES } from '../Constant/messages.js';

export class OutputHandler {
  printPurchaseCount(purchaseCount) {
    // TODO: 리펙토링 - 상수처리
    return Console.readLineAsync(`\n${purchaseCount}개를 구매했습니다.\n`);
  }

  printIssuedLottoList(purchasedLottoList) {
    purchasedLottoList.forEach((element) => {
      Console.print(`[${element.join(', ')}]`);
    });
  }
}
