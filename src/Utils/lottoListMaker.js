import { Random } from '@woowacourse/mission-utils';

export const issueLottoList = (purchaseCount) => {
  const purchasedLottoList = [];

  for (let i = 0; i < purchaseCount; i += 1) {
    const issuedLotto = (Random.pickUniqueNumbersInRange(1, 45, 6)).sort((a, b) => a - b);
  
    purchasedLottoList.push(issuedLotto);
  }

  return purchasedLottoList;
};
