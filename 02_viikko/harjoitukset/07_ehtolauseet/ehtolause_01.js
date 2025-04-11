/* 
Kirjoita funktio nimeltä checkAdult:
Ota ikä parametrina.
Jos ikä on 18 tai enemmän, palauta "Olet aikuinen."
Muussa tapauksessa älä palauta mitään.
Kutsu funktiota eri ikäarvoilla ja tulosta tulos.
*/

function checkAdult(age) {
	if (age >= 18) {
		return "Olet aikuinen.";
	}
	else {
		return;
	}
}
const result1 = checkAdult(20);
const result2 = checkAdult(16);
console.log(result1); // Olet aikuinen.
console.log(result2); // undefined