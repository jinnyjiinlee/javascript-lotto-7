export const calculateRateOfReturn = (purchasePrice, totalWinningAmount) =>
  ((totalWinningAmount / purchasePrice) * 100).toFixed(1);
