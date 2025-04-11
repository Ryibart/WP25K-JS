/* 
Kirjoita JavaScript-koodi, joka valitsee sisällön tunnuksen käyttämällä getElementById-metodia.
Kirjoita funktio, joka päivittää valitun elementin tekstisisällön painamalla nappia tekstiksi "Hei, maailma!".
*/

function updateContent() {
	// Valitaan elementti id:n perusteella
	const contentElement = document.getElementById("content");

	// Päivitetään elementin tekstisisältö
	contentElement.textContent = "Hei, maailma!";
}
// Lisätään tapahtumakuuntelija napille
const button = document.querySelector("button");
button.addEventListener("click", updateContent);