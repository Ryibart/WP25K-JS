/* Luo funktio nimeltä replaceWord, joka:
Ottaa kolme parametria, sentence, oldWord ja newWord.
Palauttaa lauseen, jossa oldWord on korvattu newWordilla.
Kutsu funktiota lauseella "I like apples.", oldWord: "apples" ja newWord: "bananas".
Tulosta tulos käyttäen console.log().
*/

function replaceWord(sentence, oldWord, newWord) {
	return sentence.replace(oldWord, newWord);
}
const result = replaceWord("I like apples.", "apples", "bananas");
console.log("Replaced sentence: " + result);