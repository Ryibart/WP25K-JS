/* Määritä kolme merkkijonovakiota käyttäen yksinkertaisia lainausmerkkejä, kaksoislainausmerkkejä ja backtick-merkkejä. Esimerkiksi:
'Yksinkertaisilla lainausmerkeillä merkitty merkkijono'
"Kaksoislainausmerkeillä merkitty merkkijono"
`Mallimerkkijono`
Tulosta kaikki kolme merkkijonoa käyttäen console.log().
*/

let singleQuoteString = 'Yksinkertaisilla lainausmerkeillä merkitty merkkijono';
let doubleQuoteString = "Kaksoislainausmerkeillä merkitty merkkijono";
let templateString = `Mallimerkkijono`;
console.log(singleQuoteString);
console.log(doubleQuoteString);
console.log(templateString);

// Vaihtoehtoinen tapa
// let strings = [
//     'Yksinkertaisilla lainausmerkeillä merkitty merkkijono',
//     "Kaksoislainausmerkeillä merkitty merkkijono",
//     `Mallimerkkijono`
// ];
// strings.forEach(str => console.log(str));