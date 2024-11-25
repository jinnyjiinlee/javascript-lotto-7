import { InputHandler } from '../View/inputView.js';
import { OutputHandler } from '../View/outputView.js';

import { calculatePurchaseCount } from '../Model/purchaseCountCalculator.js';
import { issueLottoList } from '../Model/lottoListMaker.js';
import { parseWinningNumbers } from '../Model/winningNumbersParser.js';

import { MatchesHandler } from '../Model/winningNumbersMatcher.js';
// import 안되는 이유아시는 분 ㅠㅠ

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

    const purchasedLottoList = issueLottoList(purchaseCount);

    this.output.printIssuedLottoList(purchasedLottoList);

    const winningNumbers = await this.input.getWinningNumbersInput();

    const parsedWinningNumbers = parseWinningNumbers(winningNumbers);

    const bonusNumber = await this.input.getBonusNumberInput();

    new MatchesHandler().matchWinningNumber(
      purchasedLottoList,
      winningNumbers,
      bonusNumber,
    );

    // 당첨 통계 프린트
    this.output.printWinningStatistics(purchasedLottoList);
  }
}
