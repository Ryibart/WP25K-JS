/* 
Kirjoita funktio nimeltä sumAndAverage:
- Pyydä käyttäjältä 10 numeroa
- Laske ja lokita konsoliin: 
    - Kaikkien numeroiden summa.
    - Annettujen numeroiden keskiarvo.
    - Suurin ja pienin numero
*/

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.

function sumAndAverage() {
    let sum = 0;
    let count = 10;
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
                sum += number;
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

    let average = sum / count;

    console.log("Lukujen summa: " + sum);
    console.log("Lukujen keskiarvo: " + average);
    console.log("Suurin luku: " + maxNumber);
    console.log("Pienin luku: " + minNumber);
}
sumAndAverage();