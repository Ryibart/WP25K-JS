/* Luo funktio averageSpeed, joka pyytää jatkuvasti käyttäjää syöttämään etäisyyden (kilometreinä)
 ja ajan (tunteina) ja laskee sitten keskinopeuden.
 Ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeksi.
 Saadessaan etäisyyden 0 ohjelman ei pitäisi pyytää enempää syöttöä. */

// Tehdään tämä opettajan esimerkkinä, koska promptin käyttö ei ole vielä tuttua.

function averageSpeed() {
	let totalDistance = 0;
	let totalTime = 0;

	while (true) {
		const distance = parseFloat(prompt("Syötä etäisyys (km) tai 0 lopettaaksesi:"));
		if (distance === 0) {
			break;
		}
		const time = parseFloat(prompt("Syötä aika (tunnissa):"));
		totalDistance += distance;
		totalTime += time;
	}

	if (totalTime > 0) {
		const averageSpeed = totalDistance / totalTime;
		console.log(`Keskinopeus on ${averageSpeed.toFixed(2)} km/h`);
	} else {
		console.log("Ei syötettyä aikaa.");
	}
}

averageSpeed();