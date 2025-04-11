/* 
Kirjoita funktio nimeltä planAdventure:
Ota kolme parametria: isWeekend, isSunny ja likesFoxes.
Käytä loogisia operaattoreita:
Jos on viikonloppu JA aurinkoista JA pitää ketuista, palauta "Täydellinen päivä kettuseikkailulle!"
Jos on viikonloppu TAI aurinkoista, palauta "Hyvä päivä, mutta ei täydellinen."
Muussa tapauksessa palauta "Ehkä joku toinen päivä."
Kutsu funktiota eri yhdistelmillä ehtoja.
*/

function planAdventure(isWeekend, isSunny, likesFoxes) {
	if (isWeekend && isSunny && likesFoxes) {
		return "Täydellinen päivä kettuseikkailulle!";
	} else if (isWeekend || isSunny) {
		return "Hyvä päivä, mutta ei täydellinen.";
	} else {
		return "Ehkä joku toinen päivä.";
	}
}
const result1 = planAdventure(true, true, true);
const result2 = planAdventure(true, false, true);
const result3 = planAdventure(false, true, false);

console.log(result1); // Täydellinen päivä kettuseikkailulle!
console.log(result2); // Hyvä päivä, mutta ei täydellinen.
console.log(result3); // Ehkä joku toinen päivä.