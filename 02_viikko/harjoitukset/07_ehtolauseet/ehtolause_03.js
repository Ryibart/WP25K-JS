/* 
Kirjoita funktio nimeltä getGrade:
Ota pistemäärä parametrina.
Jos pistemäärä on 90 tai enemmän, palauta "Arvosana Kiitettävä".
Jos pistemäärä on välillä 80–89, palauta "Arvosana Hyvä".
Kaikilla muilla pistemäärillä palauta "Avosana Tyydyttävä".
Kutsu funktiota pisteillä kuten 85 ja 75 ja tulosta tulos.
*/

function getGrade(score) {
	if (score >= 90) {
		return "Arvosana Kiitettävä";
	} else if (score >= 80 && score < 90) {
		return "Arvosana Hyvä";
	} else {
		return "Arvosana Tyydyttävä";
	}
}
const result1 = getGrade(85);
const result2 = getGrade(75);
console.log(result1); // Arvosana Hyvä
console.log(result2); // Arvosana Tyydyttävä
