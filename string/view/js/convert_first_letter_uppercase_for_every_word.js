const SENTENCE = 'good afternoon, mr mike.';

function convertFirstLetterUppercaseForEveryWord(sentence) {
  let words = sentence.split(' ');
  let wordsCount = words.length;
  let convertedWords = [];
  for (let i = 0; i < wordsCount; i++) {
    convertedWords.push(firstLetterToUpperCase(words[i]));
  }
  let changedSentence = convertedWords.join(' ');
  return changedSentence;
}

function convertFirstLetterUppercase(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1);
}
document.write(convertFirstLetterUppercaseForEveryWord(SENTENCE));