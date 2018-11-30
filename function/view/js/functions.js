function revertString(message) {
  let reverted = "";
  for (let i = 0; i < message.length; i++) {
    reverted += message[message.length - 1 - i];
  }
  return reverted;
}

function palindrome(message) {
  let halfLength = message.length / 2;
  let judgement = true;
  for (let i = 0; i < halfLength; i++) {
    if (message[i] != message[message.length - 1 - i]) {
      judgement = false;
    }
  }
  return judgement;
}

function palindromeByRevert(message) {
  return message === revertString(message);
}

function alphabetSort(message) {
  let array = new Array(message.length);
  for (let i = 0; i < message.length; i++) {
    array[i] = message[i];
  }
  array.sort();
  array.join();
  return array;
}

function countWords(message) {
  let words = message.split(" ");
  return words.length;
}