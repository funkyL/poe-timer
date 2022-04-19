const HOURS = document.getElementById("clock");
const MINUTES = document.getElementById("clock2");
const SECONDS = document.getElementById("clock3");
const TENTHS = document.getElementById("clock4");


const startTime = Date.now();
let dmilli = 1;
let dhour, dmin, dsec, dten, fhour, fmin, fsec, ften = "00";

function deltaMilli() {
  dmilli = Date.now() + 80000000;
};

function calcDeltaTime() {
	dhour = Math.floor((dmilli - startTime) /3600000);
	dmin = Math.floor((dmilli - startTime) /60000);
	dsec = Math.floor((dmilli - startTime) /1000);
	dten = Math.floor((dmilli - startTime) /10);
}

function formatHour () {
	fhour = dhour;
}
function formatMin() {
	fmin = dmin;
	if (fmin >= 60) {
		fmin = dmin - (dhour * 60);
	}
	if (fmin < 1) { fmin = "00"}
	else if (fmin < 10) { fmin = "0" + fmin }
}
function formatSec() {
	fsec = dsec;
	if (fsec >= 60){
		fsec = dsec - (dmin * 60);
	}
	if (fsec < 1) { fsec = "00"}
	else if (fsec < 10) {fsec = "0" + fsec}
}
function formatTen() {
	ften = dten;
	if (ften >= 100) {
		ften = dten - (dsec * 100);
	}
	if (ften < 1) { ften = "00"}
	else if (ften < 10 ) { ften = "0" + ften}
}


function formatAll () {
	formatHour();
	formatMin();
	formatSec();
	formatTen();
}

function update() {
	deltaMilli();
	calcDeltaTime();
	formatAll();
	HOURS.innerText = fhour;
	MINUTES.innerText = fmin;
	SECONDS.innerText = fsec;
	TENTHS.innerText = ften;
}

setInterval(update, 10);