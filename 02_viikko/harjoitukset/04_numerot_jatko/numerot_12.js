/* 
1. Luo kolme muuttujaa: a = 12, b = 7 ja c = 20.
2. Käytä Math.max()-metodia löytääksesi suurimman luvun a:n, b:n ja c:n joukosta.
3. Käytä Math.min()-metodia löytääksesi pienimmän luvun niiden joukosta.
4. Tulosta tulokset käyttäen console.log():ää viestien kera, kuten:
"The largest number is 20."
"The smallest number is 7."
*/

let a = 12;
let b = 7;
let c = 20;

let largest = Math.max(a, b, c);
let smallest = Math.min(a, b, c);
console.log(`Suurin luku on ${largest}`);
console.log(`Pienin luku on ${smallest}`);

// Vaihtoehtoinen tapa
// console.log(`Suurin luku on ${Math.max(a, b, c)}`);
// console.log(`Pienin luku on ${Math.min(a, b, c)}`);
// Vaihtoehtoinen tapa
// let numbers = [a, b, c];
// let largest = Math.max(...numbers);
// let smallest = Math.min(...numbers);
// console.log(`Suurin luku on ${largest}`);
// console.log(`Pienin luku on ${smallest}`);