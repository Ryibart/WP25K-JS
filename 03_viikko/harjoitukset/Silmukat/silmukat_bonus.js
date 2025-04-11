/* 
Muokkaa harjoituksen 4 (tehty opettajan kanssa) ohjelmaa niin, että 
ohjelma laskee KAIKKIEN annettujen matkojen keskinopeuden. 

Luo funktio allTripsAverageSpeed, joka pyytää jatkuvasti käyttäjää syöttämään 
etäisyyden (kilometreinä) ja ajan (tunteina). 
Ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeksi.
Silloin ohjelma tulostaa kaikkien matkojen yhteenlasketun keskinopeuden. 
 */

function allTripsAverageSpeed() {
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
allTripsAverageSpeed();