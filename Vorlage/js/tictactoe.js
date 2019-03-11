//Spieler
var player = 1;
//Felder
var fields = ['','','','','','','','',''];

//Füge EventListener an die Felder 1 bis 9 beim Seitenstart (mit Array und ohne Objektorientierung)
function addEventListeners() {
	document.getElementById('0').addEventListener('click', function () { chooseField(0) });
	/* ... hier kommt dein Code ... */
}

//Die Funktion 'chooseField' prüft, ob das Feld bereits besetzt ist. Falls nicht, wird (abhängig vom Spieler) das entsprechende Zeichen gesetzt.
function chooseField(thisField) {
	/* ... hier kommt dein Code ... */
}

//Die Funktion 'checkWinner' überprüft nach jedem Spielzug, ob es einen Sieger gibt
function checkWinner(){
	/* ... hier kommt dein Code ... */
}