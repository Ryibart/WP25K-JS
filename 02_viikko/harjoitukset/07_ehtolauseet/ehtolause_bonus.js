/* Tämä tehtävä on vapaaehtoinen.

Luo Magic 8-Ball -ohjelma, joka matkii klassista kohtalon ennustamisen lelua. 
Käyttäjä syöttää kyllä-tai-ei -kysymyksen, ja ohjelma antaa satunnaisen vastauksen 8-pallosta. 
Määrittele itse vastausvaihtoehdot. 
Tarvitset tähän tehtävään myös html-sivua ja sinne prompt() kysymyksen esittämiseen. */

// Luo HTML-tiedosto nimeltä "magic8ball.html" ja lisää seuraava koodi siihen:
// FIXTHIS: Kesken, koodi ei ole valmis -RT
/*

<!DOCTYPE html>
<html lang="fi">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Magic 8-Ball</title>
	<style>
		body {
			font-family: Arial, sans-serif;
			text-align: center;
			margin-top: 50px;
		}
		h1 {
			color: #333;
		}
		#question {
			margin-bottom: 20px;
		}
		#answer {
			font-size: 24px;
			color: #007BFF;
		}
	</style>
</head>
<body>
	<h1>Magic 8-Ball</h1>
	<div id="question">
		<label for="userQuestion">Esitä kysymys (kyllä tai ei):</label>
		<input type="text" id="userQuestion" />
		<button onclick="getAnswer()">Kysy 8-pallolta</button>
	</div>
	<div id="answer"></div>

	<script src="magic8ball.js"></script>
</body>
</html>


*/
// Luo JavaScript-tiedosto nimeltä "magic8ball.js" ja lisää seuraava koodi siihen:

/*

function getAnswer() {
	const userQuestion = document.getElementById("userQuestion").value;
	const answers = [
		"Kyllä, ehdottomasti!",
		"Ei, ei ole mahdollista.",
		"Ehkä myöhemmin.",
		"Ei nyt, kysy uudelleen.",
		"Kyllä, mutta varovasti.",
		"Ei nyt, yritä uudelleen.",
		"Kyllä, se on varmaa!",
		"Ei, ei kannata yrittää."
	];

	const randomIndex = Math.floor(Math.random() * answers.length);
	const answer = answers[randomIndex];

	document.getElementById("answer").innerText = `Kysymyksesi: "${userQuestion}"\nVastaus: ${answer}`;
}
*/
