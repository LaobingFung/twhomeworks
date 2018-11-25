const A = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function getMostFrequentElement(array) {
  let elements = {};
  let elementsCount = array.length;
  let mostFrequentElement = null;
  let mostFrequentElementCount = 0;
  for (let i = 0; i < elementsCount; i++) {
    if (!elements[array[i]]) {
      elements[array[i]] = 0;
    }
    elements[array[i]]++;
    if (elements[array[i]] > mostFrequentElementCount) {
      mostFrequentElementCount = elements[array[i]];
      mostFrequentElement = array[i];
    }
  }
  return mostFrequentElement;
}
document.write(getMostFrequentElement(A));