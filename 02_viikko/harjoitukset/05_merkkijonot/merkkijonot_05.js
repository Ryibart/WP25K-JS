/* Määritä muuttuja nimeltä word ja anna sille arvoksi "JavaScript".
Käytä hakasulkunotaatiota päästäksesi käsiksi:
Merkkijonon ensimmäiseen merkkiin.
Merkkijonon viimeiseen merkkiin.
Tulosta näiden avulla viestit, kuten:
"The first character is J."
"The last character is t."
*/

let word = "JavaScript";
let firstCharacter = word[0];
let lastCharacter = word[word.length - 1];
console.log(`The first character is ${firstCharacter}.`);
console.log(`The last character is ${lastCharacter}.`);