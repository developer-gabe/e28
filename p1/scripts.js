let app = new Vue({
	el: '#root',
	data:{
		playerChoice: null,
		activeChoice: null,
	}
});

let compAnswer = Math.random();
if (compAnswer < 0.33) {
	compAnswer = "rock";
} else if (compAnswer <= 0.66) {
	compAnswer = "paper";
} else {
	compAnswer = "scissors";
}
