function oddAndEvenFrom0To20() {
  for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i + "是偶数。");
    } else {
      console.log(i + "是奇数。");
    }
  }
}