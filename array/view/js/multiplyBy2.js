var a = [1, 2, 3, 4, 5];

function multiplyBy2(array) {
  let arrayLength = array.length;
  let multipliedArray = [];
  for (let i = 0; i < arrayLength; i++) {
    multipliedArray.push(array[i] * 2);
  }
  return multipliedArray;
}
document.write(multiplyBy2(a));