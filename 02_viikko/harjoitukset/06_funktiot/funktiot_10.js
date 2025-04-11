/* Luo funktio nimeltä cleanAndTransform, joka:
Ottaa yhden parametrin, str.
Poistaa ylimääräiset välilyönnit, muuntaa merkkijonon pieniksi kirjaimiksi ja korvaa sanan "powerful" sanalla "amazing".
Palauttaa muunnetun merkkijonon.
Kutsu funktiota merkkijonolla " JavaScript is powerful! ".
Tulosta tulos käyttäen console.log().
*/

function cleanAndTransform(str) {
	const trimmedStr = str.trim();
	const lowerCaseStr = trimmedStr.toLowerCase();
	const replacedStr = lowerCaseStr.replace("powerful", "amazing");
	return replacedStr;
}
const result = cleanAndTransform(" JavaScript is powerful! ");
console.log("Transformed string: " + result);