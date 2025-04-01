/* 
1. Käytä Math.random() metodia satunnaisluvun generoimiseen lukujen 0 ja 1 väliltä.
2. Kerro saamasi tulos kymmenellä ja käytä Math.floor()  metodia sen pyöristämiseen lähimpään kokonaislukuun. 
3. Tulosta lopputulos console.log() avulla, jossa viesti on esimerkiksi: "Arvottu lukusi on 4"
*/

let randomNumber = Math.random() * 10;
let roundedNumber = Math.floor(randomNumber);
console.log(`Arvottu lukusi on ${roundedNumber}`);
// Vaihtoehtoinen tapa
// console.log(`Arvottu lukusi on ${Math.floor(Math.random() * 10)}`);