import { MATCHES } from '../Constant/constants.js';

export const calculateTotalWinningAmount = () =>
  MATCHES.THREE_MATCHES * 5000 +
  MATCHES.FOUR_MATCHES * 50000 +
  MATCHES.FIVE_MATCHES * 1500000 +
  MATCHES.FIVE_MATCHES_BONUS * 30000000 +
  MATCHES.SIX_MATCHES * 2000000000;
