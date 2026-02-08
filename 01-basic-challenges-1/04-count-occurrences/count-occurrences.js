// Using for loop
function countOccurrencess(string, char) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === char.toLowerCase()) count++;
  }

  return count;
}

// Using string.split() method
function countOccurrences(string, char) {
  let splittedStrArr = string.split('');
  let count = 0;

  splittedStrArr.forEach((letter) => {
    if (letter.toLowerCase() === char.toLowerCase()) count++;
  });

  return count;
}

module.exports = countOccurrences;
