const money = '￥20';

function getAmount(money) {
  var amount;
  amount = parseInt(money.substr(1));
  return amount;
}
document.write(getAmount(money));