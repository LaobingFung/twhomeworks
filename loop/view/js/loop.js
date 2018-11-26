function oddAndEvenFrom0To20() {
  for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i + "是偶数。");
    } else {
      console.log(i + "是奇数。");
    }
  }
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
oddAndEvenFrom0To20();
multiplicationTable();