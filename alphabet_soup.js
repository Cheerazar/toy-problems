/*
  Have the function alphabetSoup(str) take the str string parameter
  being passed and return the string with the letters in alphabetical
  order (ie. hello becomes ehllo). Assume numbers and punctuation
  symbols will not be included in the string.
*/

function alphabetSoup(str) {
  return str.split(' ').map(function(word) {
    return word.split('').sort(function(a, b) {
      return a.toLowerCase().charCodeAt() - b.toLowerCase().charCodeAt();
    }).join('');
  }).join(' ');
}
