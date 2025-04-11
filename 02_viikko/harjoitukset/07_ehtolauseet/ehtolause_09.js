/* 
Kirjoita funktio nimeltä canEnterEvent:
Ota kaksi parametria: age ja hasID.
Jos ikä on 18 tai enemmän JA hasID on tosi, palauta "Sisäänpääsy myönnetty."
Muussa tapauksessa palauta "Sisäänpääsy evätty."
Kutsu funktiota eri yhdistelmillä age ja hasID.
*/

function canEnterEvent(age, hasID) {
	if (age >= 18 && hasID) {
		return "Sisäänpääsy myönnetty.";
	} else {
		return "Sisäänpääsy evätty.";
	}
}
const result1 = canEnterEvent(20, true);
const result2 = canEnterEvent(16, true);
const result3 = canEnterEvent(20, false);
const result4 = canEnterEvent(16, false);
console.log(result1); // Sisäänpääsy myönnetty.
console.log(result2); // Sisäänpääsy evätty.
console.log(result3); // Sisäänpääsy evätty.
console.log(result4); // Sisäänpääsy evätty.