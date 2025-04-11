/* Luo muuttuja nimeltä description ja anna sille arvoksi " JavaScript is Fun and powerful! ".
Tee seuraavat toimenpiteet:
- Poista ylimääräiset välilyönnit käyttäen .trim().
- Muunna merkkijono pieniksi kirjaimiksi.
- Tarkista, sisältääkö se sanan "fun".
- Korvaa "powerful" sanalla "amazing".
- Tulosta lopullinen merkkijono ja tieto siitä, sisältääkö se sanan "fun" käyttäen console.log().

Esimerkkituloste:
"Final description: javascript is fun and amazing!"
"Does it include 'fun'? true"
*/


const description = " JavaScript is Fun and powerful! ";
const trimmedDescription = description.trim();
const lowerCaseDescription = trimmedDescription.toLowerCase();
const containsFun = lowerCaseDescription.includes("fun");
const finalDescription = lowerCaseDescription.replace("powerful", "amazing");

console.log("Final description: " + finalDescription);
console.log("Does it include 'fun'? " + containsFun);
