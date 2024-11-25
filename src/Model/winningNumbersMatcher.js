import { MATCHES } from '../Constant/constants.js';

export class MatchesHandler {
  matchWinningNumber(purchasedLottoList, winningNumbers, bonusNumber) {
    this.lottoList = purchasedLottoList;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;

    this.winningNumberToArr();

    this.findSameNumbers();
    this.findSameNumberForBonus();
  }

  winningNumberToArr() {
    this.winningNumbers = this.winningNumbers.split(',');
    this.winningNumbers = this.winningNumbers.map(Number);
  }

  findSameNumbers() {
    for (let i = 0; i < this.lottoList.length; i += 1) {
      const sameNumberCount = this.winningNumbers.filter((it) =>
        this.lottoList[i].includes(it),
      ).length;

      if (sameNumberCount === 3) {
        MATCHES.THREE_MATCHES += 1;
      }

      if (sameNumberCount === 4) {
        MATCHES.FOUR_MATCHES += 1;
      }

      if (sameNumberCount === 5) {
        MATCHES.FIVE_MATCHES += 1;
      }

      if (sameNumberCount === 6) {
        MATCHES.SIX_MATCHES += 1;
      }
    }
  }

  findSameNumberForBonus() {
    this.winningNumberAndBonusNumber = [];

    this.winningNumberAndBonusNumber = [...this.winningNumbers]; // 위닝 넘버
    this.winningNumberAndBonusNumber.push(Number(this.bonusNumber)); // 보너스 넘버

    // console.log(this.winningNumberAndBonusNumber);

    for (let i = 0; i < this.lottoList.length; i += 1) {
      const sameNumberCount = this.winningNumberAndBonusNumber.filter((it) =>
        this.lottoList[i].includes(it),
      ).length;

      if (sameNumberCount === 6) {
        MATCHES.FIVE_MATCHES_BONUS += 1;
      }
    }
  }
}
