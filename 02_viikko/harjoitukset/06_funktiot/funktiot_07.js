/* Luo funktio nimeltä containsWord, joka:
Ottaa kaksi parametria, sentence ja word.
Palauttaa true, jos sentence sisältää sanan word, muuten false.
Kutsu funktiota lauseella "JavaScript is fun!" ja sanalla "fun".
Tulosta tulos käyttäen console.log().

Bonus: Muokkaa funktiota käyttämään implisiittistä palautusta.
*/

function containsWord(sentence, word) {
	return sentence.includes(word);
}
const result1 = containsWord("JavaScript is fun!", "fun");
console.log("Does the sentence contain 'fun'? " + result1);
// Bonus: Implisiittinen palautus
const containsWordImplicit = (sentence, word) => sentence.includes(word);
const result2 = containsWordImplicit("JavaScript is fun!", "fun");
console.log("Does the sentence contain 'fun'? " + result2);