/* 
Kirjoita funktio nimeltä validatePassword:
- Käytä silmukkaa salliaksesi käyttäjän syöttää salasana.
- Jos salasana on "oikein123", tulosta: "Salasana oikein!" ja poistu silmukasta.
- Jos salasana on väärä, pyydä käyttäjää uudelleen viestillä: "Yritä uudelleen!".
*/

function validatePassword() {
	let password;
	const correctPassword = "oikein123";

	while (true) {
		password = prompt("Anna salasana:");
		if (password === correctPassword) {
			console.log("Salasana oikein!");
			break;
		} else {
			console.log("Yritä uudelleen!");
		}
	}
}
validatePassword();