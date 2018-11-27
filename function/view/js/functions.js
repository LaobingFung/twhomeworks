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