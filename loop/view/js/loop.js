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

function multiplicationTable() {
  for (let i = 1; i <= 9; i++) {
    let oneLineInTable = "";
    for (let j = 1; j <= i; j++) {
      let result = i * j;
      oneLineInTable += i + "*" + j + "=" + result + " ";
    }
    console.log(oneLineInTable);
  }
}
showOddAndEven(0, 20);
multiplicationTable();