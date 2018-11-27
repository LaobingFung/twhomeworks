function revertString(message) {
  let reverted = "";
  for (let i = 0; i < message.length; i++) {
    reverted += message[message.length - 1 - i];
  }
  return reverted;
}