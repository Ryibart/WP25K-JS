/* Luo muuttuja nimeltä longText ja anna sille arvoksi "The quick brown fox jumps over the lazy dog."
Käytä .slice()-menetelmää erottaaksesi "quick brown fox".
Tulosta erotettu osa käyttäen console.log().

Esimerkkituloste:
"Sliced text: quick brown fox"
*/

const longText = "The quick brown fox jumps over the lazy dog.";
const slicedText = longText.slice(4, 20); // "quick brown fox" alkaa indeksistä 4 ja päättyy indeksiin 20 (ilman 20)
console.log("Sliced text: " + slicedText);
