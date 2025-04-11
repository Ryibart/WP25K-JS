/* 
Kirjoita funktio sumFromOneToHundred:
- Laske silmukan avulla kaikkien kokonaisulukujen summa välillä 1 ja 100
- Tulosta lopputulos konsoliin
*/

function sumFromOneToHundred() {
	let sum = 0;
	for (let i = 1; i <= 100; i++) {
		sum += i;
	}
	console.log("Lukujen summa 1-100: " + sum);
}
sumFromOneToHundred();