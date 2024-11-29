export const calculateRateOfReturn = (purchaseAmount, totalWinningAmount) =>
  ((totalWinningAmount / purchaseAmount) * 100).toFixed(1);
