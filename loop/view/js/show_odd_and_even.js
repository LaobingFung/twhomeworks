function showOddAndEven(lowBorder, upBorder) {
  for (let i = lowBorder; i <= upBorder; i++) {
    if (isEven(i)) {
      console.log(i + "是偶数。");
    } else {
      console.log(i + "是奇数。");
    }
  }
}

function isEven(number) {
    return (number%2 === 0);
}

showOddAndEven(0, 20);