/* 
Kirjoita funktio nimeltä canEat:
Ota kaksi parametria: isHungry ja hasFood.
Jos molemmat ovat tosi, palauta "Aika syödä!".
Jos jompikumpi on epätosi, palauta "Sinun täytyy löytää ruokaa!"
Kutsu funktiota eri isHungry ja hasFood yhdistelmillä.
*/

function canEat(isHungry, hasFood) {
	if (isHungry && hasFood) {
		return "Aika syödä!";
	} else if (isHungry && !hasFood) {
		return "Sinulla ei ole nälkä!";
	}
	else if (!isHungry && hasFood) {
		return "Sinun täytyy löytää ruokaa!";
	} else {
		return "Ei nälkä eikä ruokaa!";
	}
}
const result1 = canEat(true, true);
const result2 = canEat(true, false);
const result3 = canEat(false, true);
const result4 = canEat(false, false);

console.log(result1); // Aika syödä!
console.log(result2); // Sinulla ei ole nälkä!
console.log(result3); // Sinun täytyy löytää ruokaa!
console.log(result4); // Ei nälkä eikä ruokaa!