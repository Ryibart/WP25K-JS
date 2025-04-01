/** Tehtävä: Ostoskori
 * Kuvitellaan, että olet kehittämässä yksinkertaista verkkokauppasovellusta. Sinun tehtäväsi on luoda ohjelma, joka laskee ostoskorissa olevien tuotteiden yhteishinnan ja tulostaa sen.
 * - Määrittele muuttujat kullekin ostoskorissa olevalle tuotteelle ja niiden hinnoille.
 * - Laske tuotteiden yhteishinta ja tallenna se muuttujaan, esimerkiksi yhteishinta.
 * - Tulosta yhteishinta konsoliin.
 */

let product1Price = 19.99;
let product2Price = 5.49;
let product3Price = 12.99;

let totalPrice = product1Price + product2Price + product3Price;
console.log(`Ostoskorin yhteishinta on: ${totalPrice} euroa`);
// Vaihtoehtoinen tapa
function calculateTotalPrice(prices) {
	let total = 0;
	for (let price of prices) {
		total += price;
	}
	return total;
}
let prices = [product1Price, product2Price, product3Price];
let total = calculateTotalPrice(prices);
console.log(`Ostoskorin yhteishinta on: ${total} euroa`);