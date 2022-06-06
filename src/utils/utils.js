export const addNewCoinData = (coins, coin) => {
  const price = coins[coin.s].ars(coin).toFixed(4);
  coins[coin.s].price = price;
  coins[coin.s].percentage = coins[coin.s].getPercentage(coin).toFixed(3);

  return { ...coins };
};

export const searchCoins = (coins, search) => {
  return coins.filter( coin =>
    coin?.symbol.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
    coin?.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
}

const CCL = 200;
export const ars = (price) => price * CCL;
export const specialArs = (price) => (1 / price) * CCL;
export const percentage = (openPrice, lastPrice) => (lastPrice - openPrice) / openPrice * 100;