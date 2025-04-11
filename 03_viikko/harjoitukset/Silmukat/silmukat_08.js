/* 
Kirjota funktio nimeltä findMinMax:
- Kysy käyttäjältä kuinka monta numeroa he haluavat antaa. 
- Sen jälkeen pyydä käyttäjältä heidän haluamansa määrä numeroita. 
- Kun numerot on syötetty päättele ja tulosta konsoliin:
    - Pienin numero.
    - Suurin numero. 
*/


function findMinMax() {
    let count = parseInt(prompt("Kuinka monta numeroa haluat antaa?"));
    let numbers = [];
    let maxNumber = Number.NEGATIVE_INFINITY;
    let minNumber = Number.POSITIVE_INFINITY;

    for (let i = 0; i < count; i++) {
        while (true) {
            let number = parseFloat(prompt("Anna luku:"));
            if (isNaN(number)) {
                alert("Virheellinen syöte. Anna numero.");
                continue;
            }
            else {
                numbers.push(number);
                if (number > maxNumber) {
                    maxNumber = number;
                }
                if (number < minNumber) {
                    minNumber = number;
                }
                break;
            }
        }
    }

    console.log("Suurin luku: " + maxNumber);
    console.log("Pienin luku: " + minNumber);
}
findMinMax();