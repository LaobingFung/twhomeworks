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

multiplicationTable();