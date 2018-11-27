var a = [5, 1, 8, 10, 4];

function sortDesc(array) {
  return array.sort(compareNumbers).reverse();
}

function compareNumbers(a, b) {
  return a - b;
}
document.write(sortDesc(a));