import {
  getPurchasePriceInput,
  getWinningNumbersInput,
  getBonusNumberInput,
} from './Views/inputViews.js';
import { validatePurchasePrice } from './Models/purchasePriceValidator.js';
import { validateWinningNumbers } from './Models/winningNumbersValidator.js';
import { validateBonusNumber } from './Models/bonusNumberValidator.js';

class App {
  async run() {
    const purchasePrice = await getPurchasePriceInput();
    validatePurchasePrice(purchasePrice);
    const winningNumbers = await getWinningNumbersInput();
    validateWinningNumbers(winningNumbers);
    const bonusNumber = await getBonusNumberInput();
    validateBonusNumber(bonusNumber);
  }
}

export default App;
