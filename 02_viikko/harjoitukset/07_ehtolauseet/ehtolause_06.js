/* 
Kirjoita funktio nimeltä isEven:
Ota parametrina luku.
Palauta true, jos luku on parillinen, tai false, jos se on pariton.
Kutsu funktiota luvuilla kuten 4 ja 7, ja tulosta "Numero on pariton!" tai "Numero on parillinen!" tuloksen perusteella.
*/

function isEven(num) {
	if (num % 2 === 0) {
		return true;
	} else {
		return false;
	}
}
const number1 = 4;
const number2 = 7;
const result1 = isEven(number1);
const result2 = isEven(number2);
console.log(result1 ? "Numero on parillinen!" : "Numero on pariton!"); // Numero on parillinen!
console.log(result2 ? "Numero on parillinen!" : "Numero on pariton!"); // Numero on pariton!