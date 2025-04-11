/* Luo funktio nimeltä add, joka:
Ottaa kaksi parametria, a ja b.
Palauttaa a:n ja b:n summan.
Kutsu funktiota arvoilla 10 ja 5.
Tulosta tulos käyttäen console.log().

Bonus: Kutsu funktiota useita kertoja eri argumenteilla ja tulosta kaikki tulokset.
*/

function add(a, b) {
	return a + b;
}
const result1 = add(10, 5);
const result2 = add(20, 15);
const result3 = add(30, 25);

console.log("Sum of 10 and 5: " + result1);
console.log("Sum of 20 and 15: " + result2);
console.log("Sum of 30 and 25: " + result3);