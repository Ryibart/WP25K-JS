/* 
Kirjoita funktio nimeltä canVote:
Ota ikä parametrina.
Palauta true, jos ikä on 18 tai enemmän, muuten false.
Tulosta "Saat äänestää" tai "Et saa vielä äänestää" funktion palauttaman tuloksen perusteella.
*/

function canVote(age) {
	if (age >= 18) {
		return true;
	} else {
		return false;
	}
}
const age1 = 20;
const age2 = 16;
const result1 = canVote(age1);
const result2 = canVote(age2);

console.log(result1 ? "Saat äänestää" : "Et saa vielä äänestää"); // Saat äänestää
console.log(result2 ? "Saat äänestää" : "Et saa vielä äänestää"); // Et saa vielä äänestää