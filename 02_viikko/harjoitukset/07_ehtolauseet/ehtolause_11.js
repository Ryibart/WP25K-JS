/* 
Kirjoita funktio nimeltä getDayName:
Ota parametri day.
Käytä switch-rakennetta seuraavasti:
Palauta viikonpäivän nimi (1 = "Maanantai", 2 = "Tiistai", jne.).
Käytä default-haaraa palauttaaksesi "Epäkelpo päivä" virheellisille arvoille.
Kutsu funktiota sekä kelvollisilla että virheellisillä päivämääränumeroilla.
*/

function getDayName(day) {
	switch (day) {
		case 1:
			return "Maanantai";
		case 2:
			return "Tiistai";
		case 3:
			return "Keskiviikko";
		case 4:
			return "Torstai";
		case 5:
			return "Perjantai";
		case 6:
			return "Lauantai";
		case 7:
			return "Sunnuntai";
		default:
			return "Epäkelpo päivä";
	}
}
const day1 = getDayName(3); // Keskiviikko
const day2 = getDayName(8); // Epäkelpo päivä
console.log(day1);
console.log(day2);