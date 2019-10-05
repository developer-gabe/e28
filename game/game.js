let game = function() { 
	var radios = document.getElementsByName('game');

for (i = 0, length = radios.length; i < length; i++) {
	if (radios[i].checked) {
		radios[i].value;
		break;
	}
}

let usrInput = radios[i].value;

let compAnswer = Math.random();


if (compAnswer < 0.33) {
	compAnswer = "rock";
} else if (compAnswer <= 0.66) {
	compAnswer = "paper";
} else {
	compAnswer = "scissors";
}

let compare = function (a, b) {
	if (a === b) {
		return "It's a tie";
	}
	if (a === "rock") {
		if (b === "scissors") {
			return "Rock wins";
		} else {
			return "Paper wins";
		}
	}
	if (a === "paper") {
		if (b === "rock") {
			return "Paper wins";
		} else {
			return "Scissors wins";
		}
	}
	if (a === "scissors") {
		if (b === "rock") {
			return "Rock wins";
		} else {
			return "Scissors wins";
		}
	}
};

document.getElementById("comp_output").innerHTML = "Computer's Choice: " + compAnswer
document.getElementById("output").innerHTML = compare(usrInput, compAnswer);

 }
 
