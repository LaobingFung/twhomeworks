const A = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function getMostFrequentElement(array) {
  let elements = new Map();
  let mostFrequentElement = null;
  let mostFrequentElementCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (!elements.has(array[i])) {
      elements.set(array[i], 0);
    }
    elements.set(array[i], elements.get(array[i]) + 1);
    if (elements.get(array[i]) > mostFrequentElementCount) {
      mostFrequentElementCount = elements.get(array[i]);
      mostFrequentElement = array[i];
    }
  }
  return mostFrequentElement;
}
document.write(getMostFrequentElement(A));