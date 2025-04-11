/* Luo funktio nimeltä isEven, joka:
Ottaa yhden parametrin, num.
Palauttaa true, jos num on parillinen, muuten palauttaa false.
Kutsu funktiota arvoilla 4 ja 7.
Tulosta tulokset käyttäen console.log().

Bonus: Muokkaa funktiota käyttämään implisiittistä palautusta.
*/

function isEven(num) {
	return num % 2 === 0;
}
const result1 = isEven(4);
const result2 = isEven(7);
console.log("Is 4 even? " + result1);
console.log("Is 7 even? " + result2);
// Bonus: Implisiittinen palautus
const isEvenImplicit = num => num % 2 === 0;
const result3 = isEvenImplicit(4);
const result4 = isEvenImplicit(7);
console.log("Is 4 even? " + result3);
console.log("Is 7 even? " + result4);