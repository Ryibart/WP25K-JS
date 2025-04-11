/* 
Kirjoita funktio nimeltä buildGroceryList:
- Pyydä käyttäjää syöttämään ruokakauppaostoksia yksi kerrallaan.
- Lopeta, kun käyttäjä kirjoittaa "valmis".
Tulosta koko ostoslista konsoliin.
*/

function buildGroceryList () {
	let groceryList = [];
	while (true) {
		let item = prompt("Anna ostos (kirjoita 'valmis' lopettaaksesi):");
		if (item.toLowerCase() === "valmis") {
			break;
		}
		groceryList.push(item);
	}
	console.log("Ostoslista: " + groceryList.join(", "));
}
buildGroceryList();