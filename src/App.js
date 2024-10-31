import {
  getPurchasePriceInput,
  getWinningNumbersInput,
  getBonusNumberInput,
} from './Views/inputViews.js';
import { validatePurchasePrice } from './Controllers/Validator/purchasePriceValidator.js';
import { countPurchaseAmount } from './Models/purchasePriceUtils.js';
import {
  printCountPurchaseAmount,
  printLottoList,
  printRateOfReturn,
} from './Views/outputViews.js';
import { issueLottoList } from './Models/lottoListIssueUtils.js';
import { validateWinningNumbers } from './Controllers/Validator/winningNumbersValidator.js';
import { validateBonusNumber } from './Controllers/Validator/bonusNumberValidator.js';

import { produceStatistics } from './Models/winningStatisticsUtils.js';
import { produceRateOfReturn } from './Models/rateOfReturnUtils.js';
import { trimWinningNumbers } from './Models/winningNumbersUtils.js';

class App {
  async run() {
    const purchasePrice = await getPurchasePriceInput();
    validatePurchasePrice(purchasePrice);

    const purchaseCount = countPurchaseAmount(purchasePrice);
    printCountPurchaseAmount(purchaseCount);

    const lottoList = issueLottoList(purchaseCount);
    printLottoList(purchaseCount, lottoList);

    const winningNumbers = await getWinningNumbersInput();
    validateWinningNumbers(winningNumbers);

    const trimWinningNum = trimWinningNumbers(winningNumbers);

    const bonusNumber = await getBonusNumberInput();
    validateBonusNumber(bonusNumber);

    produceStatistics(trimWinningNum, bonusNumber, lottoList);

    const rateOfReturn = produceRateOfReturn(purchasePrice);
    printRateOfReturn(rateOfReturn);
  }
}

export default App;
