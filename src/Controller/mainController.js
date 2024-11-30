import { InputHandler } from '../View/inputView.js';
import { OutputHandler } from '../View/outputView.js';

import { MatchesHandler } from '../Model/winningNumbersMatcher.js';

import { calculatePurchaseCount } from '../Utils/purchaseCountCalculator.js';
import { issueLottoList } from '../Utils/lottoListMaker.js';
import { splitWinningNumbersToArray } from '../Utils/winningNumbersParser.js';
import { calculateRateOfReturn } from '../Utils/rateOfReturnCalculator.js';
import { calculateTotalWinningAmount } from '../Utils/totalWinningAmountCalculator.js';

export class MainController {
  constructor() {
    this.input = new InputHandler();
    this.output = new OutputHandler();
  }

  async startProgram() {
    const purchasePrice = await this.input.getPurchaseAmountInput();
    const purchaseCount = calculatePurchaseCount(purchasePrice);
    this.output.printPurchaseCount(purchaseCount);

    const purchasedLottoList = issueLottoList(purchaseCount);
    this.output.printIssuedLottoList(purchasedLottoList);

    const winningNumbers = await this.input.getWinningNumbersInput();
    splitWinningNumbersToArray(winningNumbers);
    const bonusNumber = await this.input.getBonusNumberInput();
    new MatchesHandler().matchWinningNumber(
      purchasedLottoList,
      winningNumbers,
      bonusNumber,
    );
    this.output.printWinningStatistics(purchasedLottoList);

    const totalWinningAmount = calculateTotalWinningAmount();
    const rateOfReturn = calculateRateOfReturn(
      purchasePrice,
      totalWinningAmount,
    );
    this.output.printRateOfReturn(rateOfReturn);
  }
}
