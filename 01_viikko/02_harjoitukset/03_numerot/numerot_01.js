// Täydennä funktio convertNumberToString niin, että se muuntaa saamansa numeron merkkijonoksi.
// Täydennä funktio convertStringToNumber niin, että se muuntaa saamansa merkkijonon numeroksi.

function convertNumberToString(number) {
  // Tarkistetaan, että syöte on luku
  if (typeof number !== 'number') {
    return NaN; // Jos ei ole luku, palautetaan NaN
  }
  // Muutetaan luku merkkijonoksi
  number = number.toString();
  // Tarkistetaan, että merkkijono ei ole tyhjää
  if (number === '') {
    return NaN; // Jos tyhjää, palautetaan NaN
  }
  return number;
}

function convertStringToNumber(string) {
  string = string.trim();
  if (string === '' || isNaN(string)) {
    return NaN;
  }
  // Muutetaan merkkijono numeroksi
  string = Number(string);
  // Tarkistetaan, että muunnos onnistui
  if (isNaN(string)) {
    return NaN; // Jos ei onnistunut, palautetaan NaN
  }
  // Tarkistetaan, että tulos on luku
  if (typeof string !== 'number') {
    return NaN; // Jos ei ole luku, palautetaan NaN
  }
  return string;
}

// Esimerkki - älä muokkaa
console.log(convertNumberToString(42)); // haluttu vastaus: "42"
console.log(convertNumberToString(97)); // haluttu vastaus: "97"
console.log(convertNumberToString(11)); // haluttu vastaus: "11"

console.log(convertStringToNumber('42')); // haluttu vastaus: 42
console.log(convertStringToNumber('97')); // haluttu vastaus: 97
console.log(convertStringToNumber('lol')); // haluttu vastaus: 11
