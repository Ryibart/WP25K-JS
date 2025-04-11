// Tee funktio logEvenNumbers, joka:
// - tulostaa kaikki parilliset kokonaisluvut 1 ja 99 välillä tällä kaavalla:  2, 98, 4, 96, ..., 50.
// - Tulosta luvut samalle riville konsolissa.

function logEvenNumbers() {
	let res = [];
	for (let i = 2; i <= 98; i += 2) {
		res.push(i);
	}
	console.log(res.join(", "));
}
logEvenNumbers();