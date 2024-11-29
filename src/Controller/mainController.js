import { InputHandler } from '../View/inputView.js';
import { OutputHandler } from '../View/outputView.js';

import { calculatePurchaseCount } from '../Utils/purchaseCountCalculator.js';
import { issueLottoList } from '../Utils/lottoListMaker.js';
import { parseWinningNumbers } from '../Utils/winningNumbersParser.js';
import { MatchesHandler } from '../Model/winningNumbersMatcher.js';

import { calculateRateOfReturn } from '../Utils/rateOfReturnCalculator.js';
import { calculateTotalWinningAmount } from '../Utils/totalWinningAmountCalculator.js';

// TODO: import 안되는 이유아시는 찾기

export class MainController {
  constructor() {
    this.input = new InputHandler();
    this.output = new OutputHandler();
  }

  async startProgram() {
    const purchaseAmount = await this.input.getPurchaseAmountInput();
    const purchaseCount = calculatePurchaseCount(purchaseAmount);
    this.output.printPurchaseCount(purchaseCount);

    const purchasedLottoList = issueLottoList(purchaseCount);
    this.output.printIssuedLottoList(purchasedLottoList);

    const winningNumbers = await this.input.getWinningNumbersInput();
    parseWinningNumbers(winningNumbers);

    const bonusNumber = await this.input.getBonusNumberInput();
    
    new MatchesHandler().matchWinningNumber(
      purchasedLottoList,
      winningNumbers,
      bonusNumber,
    );

    this.output.printWinningStatistics(purchasedLottoList);

    const totalWinningAmount = calculateTotalWinningAmount();
    const rateOfReturn = calculateRateOfReturn(
      purchaseAmount,
      totalWinningAmount,
    );

    this.output.printRateOfReturn(rateOfReturn);
  }
}
