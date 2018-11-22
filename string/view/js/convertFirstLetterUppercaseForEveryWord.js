const sentence = 'good afternoon, mr mike.';

function convertFirstLetterUppercaseForEveryWord(sentence) {
  var words = sentence.split(' ');
  var wordsCount = words.length;
  var convertedWords = [];
  for (let i = 0; i < wordsCount; i++) {
    convertedWords.push(firstLetterToUpperCase(words[i]));
  }
  var changedSentence = convertedWords.join(' ');
  return changedSentence;
}

function convertFirstLetterUppercase(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1);
}
document.write(convertFirstLetterUppercaseForEveryWord(sentence));