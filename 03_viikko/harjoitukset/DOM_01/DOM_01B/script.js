/* Toteuta HTML sivu, jolla on nappi. Lisää tälle <button> elementille id. 
Napin vieressä on numero nolla. Lisää tälle tekstipaikalle myös id. 

Lisää napille getElementById:n avulla tapahtumakäsittelijä, joka kuuntelee 
"click" -tapahtumaa. Kun nappia painetaan, verkkosivun numeron arvo kasvaa yhdellä. 

*/

function incrementNumber() {
	// Valitaan elementti id:n perusteella
	const numberElement = document.getElementById("counter");

	// Muutetaan tekstisisältöä
	numberElement.textContent = parseInt(numberElement.textContent) + 1;
}
// Lisätään tapahtumakuuntelija napille
const button = document.getElementById("incrementButton");
button.addEventListener("click", incrementNumber);