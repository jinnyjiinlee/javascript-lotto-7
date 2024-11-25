import { InputHandler } from '../View/inputView.js';
import { OutputHandler } from '../View/outputView.js';

export class MainController {
  constructor() {
    this.input = new InputHandler();
    this.output = new OutputHandler();
  }

  async startProgram() {
      const purchaseAmount = await this.input.getPurchaseAmountInput();
    //   // 결과 출력
    //   this.output.printRaceStatus(parsedCarNames, raceStatus);
    //   this.output.printFinalWinners(parsedCarNames, findWinnerIndex);
    // }
  }
}
