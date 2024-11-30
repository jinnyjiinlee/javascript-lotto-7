import { LOTTO_UNIT } from '../Constant/constants.js';

export const calculatePurchaseCount = (purchasePrice) =>
  purchasePrice / LOTTO_UNIT;
