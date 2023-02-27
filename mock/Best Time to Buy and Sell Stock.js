var maxProfit = function (prices) {
  let maxp = 0;
  let updateP = 0;
  let min = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    updateP = prices[i] - min;
    if (maxp < updateP) {
      maxp = updateP;
    }
  }
  return maxp;
};
