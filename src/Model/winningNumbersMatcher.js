import { MATCHES } from '../Constant/constants.js';

export class MatchesHandler {
  matchWinningNumber(purchasedLottoList, winningNumbers, bonusNumber) {
    this.lottoList = purchasedLottoList;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;

    this.winningNumbersToArray();
    this.findSameNumbers();
    this.findSameNumberForBonus();
  }

  winningNumbersToArray() {
    this.winningNumbers = this.winningNumbers.split(',').map(Number);
  }

  // refactor: it은 진짜아님
  findSameNumbers() {
    for (const lotto of this.lottoList) {
      const sameNumberCount = this.winningNumbers.filter((it) =>
        lotto.includes(it),
      ).length;

      switch (sameNumberCount) {
        case 3:
          MATCHES.THREE_MATCHES += 1;
          break;
        case 4:
          MATCHES.FOUR_MATCHES += 1;
          break;
        case 5:
          MATCHES.FIVE_MATCHES += 1;
          break;
        case 6:
          MATCHES.SIX_MATCHES += 1;
          break;
        default:
          break;
      }
    }
  }

  findSameNumberForBonus() {
    // winningNUmber에서
    this.addBonusNumberToWinningNumbersArray();
    // eslint-disable-next-line no-restricted-syntax
    for (const lotto of this.lottoList) {
      const sameNumberCount = this.winningNumberAndBonusNumber.filter((it) =>
        lotto.includes(it),
      ).length;

      if (sameNumberCount === 6) {
        MATCHES.FIVE_MATCHES_BONUS += 1;
      }
    }
  }

  addBonusNumberToWinningNumbersArray() {
    this.winningNumberAndBonusNumber = [...this.winningNumbers];
    this.winningNumberAndBonusNumber.push(Number(this.bonusNumber));
  }
}
