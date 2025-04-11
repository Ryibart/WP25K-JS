/* Luo funktio nimeltä generateRandomNumber, joka:
Ottaa kaksi parametria, min ja max.
Palauttaa satunnaisen kokonaisluvun min:n ja max:n väliltä (mukaan lukien).
Kutsu funktiota arvoilla 1 ja 10.
Tulosta tulos käyttäen console.log().

Vinkki: Käytä Math.random(), Math.floor() ja yksinkertaista matikkaa.
*/

function generateRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNumber = generateRandomNumber(1, 10);
console.log("Random number between 1 and 10: " + randomNumber);

// Funktion logiikka avattuna:
// Math.random() luo satunnaisen liukuluvun väliltä 0 (sisältyy) ja 1 (ei sisälly).
// Kun tämä kerrotaan (max - min + 1):llä, saadaan satunnainen luku väliltä 0 ja (max - min + 1).