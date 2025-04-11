/* 
Kirjoita funktio nimeltä createWordPyramid:
- Ota syötteenä sana (esim. "koodi").
- Käytä silmukkaa rakentaaksesi pyramidityylisen kuvion:
    Esimerkki sanalle "koodi":
    k
    ko
    koo
    kood
    koodi
*/

function createWordPyramid() {
    let word = prompt("Anna sana:");
    if (word.length === 0) {
        console.log("Virheellinen syöte. Anna vähintään yksi merkki.");
        return;
    }
    for (let i = 1; i <= word.length; i++) {
        console.log(word.slice(0, i));
    }
}
createWordPyramid();