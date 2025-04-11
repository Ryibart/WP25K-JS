/* 
Kirjoita funktio nimeltä countdownTimer:
- Ota syötteenä luku (esim. 10) ja simuloi lähtölaskenta konsolissa.
- Tulosta jokainen luku laskevassa järjestyksessä nollaan asti
- Lopuksi tulosta: "Aika loppui!".
*/

function countdownTimer() {
	let start = parseInt(prompt("Anna lähtölaskennan alkuarvo (esim. 10):"));
	if (isNaN(start) || start < 0) {
		console.log("Virheellinen syöte. Anna positiivinen kokonaisluku.");
		return;
	}
	for (let i = start; i >= 0; i--) {
		console.log(i);
	}
	console.log("Aika loppui!");
}
countdownTimer();
