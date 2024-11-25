import { InputHandler } from '../View/inputView.js';
import { OutputHandler } from '../View/outputView.js';

import { calculatePurchaseCount } from '../Model/purchaseCountCalculator.js';

export class MainController {
  constructor() {
    this.input = new InputHandler();
    this.output = new OutputHandler();
  }

  async startProgram() {
    const purchaseAmount = await this.input.getPurchaseAmountInput();

    const purchaseCount = calculatePurchaseCount(purchaseAmount);
    // 로또 구매 수 출력
    this.output.printPurchaseCount(purchaseCount);

    //   // 결과 출력
    //   this.output.printRaceStatus(parsedCarNames, raceStatus);
    //   this.output.printFinalWinners(parsedCarNames, findWinnerIndex);
    // }
  }
}
