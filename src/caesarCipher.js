let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function isUppercase(letter) {
  return letter.toUpperCase() === letter;
}

function isPunctuation(letter) {
  return (
    lowercaseLetters.findIndex(l => l === letter) === -1 && uppercaseLetters.findIndex(l => l === letter) === -1
  );
}

function getShiftLetter(list, letter, shift) {
  let letterIndex = list.findIndex((l) => l === letter);
  return list[(letterIndex + shift) % 26];
}

export function caesarCipher(string, shift) {
  let letters = string.split("");
  let shiftedLetters = letters.map((letter) => {
    if (isPunctuation(letter)) {
      return letter;
    } else if (isUppercase(letter)) {
      return getShiftLetter(uppercaseLetters, letter, shift);
    } else {
      return getShiftLetter(lowercaseLetters, letter, shift);
    }
  });
  return shiftedLetters.join("");
}
