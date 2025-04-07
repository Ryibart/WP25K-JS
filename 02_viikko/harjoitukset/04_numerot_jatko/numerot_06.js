/* 
Luo kaksi muuttujaa:
numString1 arvolla "42".
numString2 arvolla "3.14".
Käytä parseInt()-funktiota muuntaaksesi numString1 kokonaisluvuksi.
Käytä parseFloat()-funktiota muuntaaksesi numString2 liukuluvuksi.
Tulosta tulokset käyttäen console.log() viestien kera:
"Kokonaisluku on 42."
"Liukuluku on 3.14."
*/


let numString1 = "42";
let numString2 = "3.14"
let testString = "69tes17ti"; // Tarkoituksena on varmentaa, että parseInt() toimii oikein

console.log(`Kokonaisluku on ${numString1}`);
console.log(`Liukuluku on ${numString2}`);
console.log(`Testi on ${testString} (69tes17ti)`);

console.log("Yllä testitulostus ennen muutosta, alla oikea tulostus");

let num1 = parseInt(numString1);
let num2 = parseFloat(numString2);
let test = parseInt(testString);
console.log(`Kokonaisluku on ${num1}\nLiukuluku on ${num2}`);
console.log(`Testi on ${test} (69)`);
