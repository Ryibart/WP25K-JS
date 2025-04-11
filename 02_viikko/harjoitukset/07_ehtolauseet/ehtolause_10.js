/* 
Kirjoita funktio nimeltä findFox:
Ota kaksi parametria: hasFox ja foxName.
Jos hasFox on tosi JA foxName on "Kikka", palauta "Kikka-kettu on täällä!"
Muussa tapauksessa palauta "No foxes found."
Kutsu funktiota eri ketunnimillä ja hasFox arvoilla.
*/

function findFox(hasFox, foxName) {
	if (hasFox && foxName === "Kikka") {
		return "Kikka-kettu on täällä!";
	} else {
		return "No foxes found.";
	}
}

const result1 = findFox(true, "Kikka");
const result2 = findFox(false, "Kikka");
const result3 = findFox(true, "Matti");
const result4 = findFox(false, "Matti");
console.log(result1); // Kikka-kettu on täällä!
console.log(result2); // No foxes found.
console.log(result3); // No foxes found.
console.log(result4); // No foxes found.

// Bonus
function findFox(hasFox, foxName) {
	if (hasFox && foxName) {
		return `${foxName}-kettu on täällä!`;
	} else if (!hasFox) {
		return "No foxes found.";
	}
	else {
		return `${foxName}-kettu ei ole täällä!`;
	}
}

const bonusresult1 = findFox(true, "Kikka");
const bonusresult2 = findFox(false, "Kikka");
const bonusresult3 = findFox(true, "Matti");
const bonusresult4 = findFox(false, "Matti");
console.log("Bonus:");
console.log(result1); // Kikka-kettu on täällä!
console.log(result2); // No foxes found.
console.log(result3); // Matti-kettu ei ole täällä!
console.log(result4); // No foxes found.