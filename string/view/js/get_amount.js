const MONEY = '￥20';

function getAmount(money) {
  return parseInt(money.substr(1));
}
document.write(getAmount(MONEY));