/* 
Kirjoita funktio nimeltä getAnimalDescription:
Ota parametri favoriteAnimal.

Käytä switch-rakennetta seuraavasti:
- Jos "fox", palauta "Ketut ovat viekkaita ja fiksuja!"
- Jos "dog", palauta "Koirat ovat uskollisia ystäviä."
- Jos "cat", palauta "Kissat ovat kiinnostuneita ja itsenäisiä."

Minkä tahansa muun eläimen kohdalla palauta "Kaikki eläimet ovat mahtavia!"
Kutsu funktiota eri eläinnimillä.
*/

function getAnimalDescription(favoriteAnimal) {
	switch (favoriteAnimal) {
		case "fox":
			return "Ketut ovat viekkaita ja fiksuja!";
		case "dog":
			return "Koirat ovat uskollisia ystäviä.";
		case "cat":
			return "Kissat ovat kiinnostuneita ja itsenäisiä.";
		default:
			return "Kaikki eläimet ovat mahtavia!";
	}
}
const result1 = getAnimalDescription("fox");
const result2 = getAnimalDescription("dog");
const result3 = getAnimalDescription("cat");
const result4 = getAnimalDescription("rabbit");
console.log(result1); // Ketut ovat viekkaita ja fiksuja!
console.log(result2); // Koirat ovat uskollisia ystäviä.
console.log(result3); // Kissat ovat kiinnostuneita ja itsenäisiä.
console.log(result4); // Kaikki eläimet ovat mahtavia!