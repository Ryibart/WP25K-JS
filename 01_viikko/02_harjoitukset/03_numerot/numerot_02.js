// Määrittele funktio, joka muuntaa lämpötilan Fahrenheit-asteista Celsius-asteiksi.
// Tämä funktio käyttää kaavaa (Fahrenheit - 32) * 5/9
// Saatu lämpötila pyöristetään yhteen desimaaliin tarkkuuden vuoksi.


function fahrenheitToCelsius(fahrenheit) {
	// Muunna Fahrenheit Celsius-asteiksi
	let celsius = (fahrenheit - 32) * 5 / 9;

	// Pyöristä tulos yhteen desimaaliin
	celsius = Math.round(celsius * 10) / 10;

	// Palauta tulos merkkijonona, jossa on pilkku desimaalierottimena
	return celsius.toString().replace('.', ',');
 
}


// Esimerkki - älä muokkaa
console.log(fahrenheitToCelsius(21)); // haluttu tulos: "-6,1"
