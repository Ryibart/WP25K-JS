/* Kopioi tähän koodi edellisestä tehtävästä. Kopioi myös tekemäsi HTML tiedosto tähän samaan kansioon. 

Lisää sivulle toinen nappi, jota klikkaamalla laskurin arvo vähenee yhdellä. 

Muista lisätä uudelle napille oma id ja sille oma tapahtumankuuntelija. Tee kaksi funktiota, jotka muuttavat saman muuttujan arvoa. 
*/

function incrementNumber() {
	// Valitaan elementti id:n perusteella
	const numberElement = document.getElementById("counter");

	// Muutetaan tekstisisältöä
	numberElement.textContent = parseInt(numberElement.textContent) + 1;
}

function decrementNumber() {
	// Valitaan elementti id:n perusteella
	const numberElement = document.getElementById("counter");

	// Muutetaan tekstisisältöä
	numberElement.textContent = parseInt(numberElement.textContent) - 1;
}
// Lisätään tapahtumakuuntelija napille
const incrementButton = document.getElementById("incrementButton");
const decrementButton = document.getElementById("decrementButton");
incrementButton.addEventListener("click", incrementNumber);
decrementButton.addEventListener("click", decrementNumber);

