/* 
Kirjoita funktio nimeltä rainAdvice:
Ota parametri isRaining.
Käytä ternary operatoria palauttamaan:
- "Pysy sisällä" jos isRaining on tosi.
- "Nauti ulkoilmasta!" muussa tapauksessa.
Kutsu funktiota eri arvoilla isRaining.
*/

function rainAdvice(isRaining) {
	return isRaining ? "Pysy sisällä" : "Nauti ulkoilmasta!";
}
const result1 = rainAdvice(true);
const result2 = rainAdvice(false);
console.log(result1); // Pysy sisällä
console.log(result2); // Nauti ulkoilmasta!