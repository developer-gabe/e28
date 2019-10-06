let app = new Vue({
  el: "#root",
  data: {
    playerChoice: null,
    activeChoice: null,
    computerChoice: null,
    winner: null
  },
  methods: {
    mixit: function() {
      this.compare(this.computerChoice, this.playerChoice);
    },
    compare: function(a, b) {
      if (a === b) {
        this.winner = "tie";
      } else {
        if (a === "rock") {
          if (b === "scissors") {
            this.winner = "rock";
          } else {
            this.winner = "paper";
          }
        }
        if (a === "paper") {
          if (b === "rock") {
            this.winner = "paper";
          } else {
            this.winner = "scissors";
          }
        }
        if (a === "scissors") {
          if (b === "rock") {
            this.winner = "rock";
          } else {
            this.winner = "scissors";
          }
        }
      }
    },
    compChoice: function() {
      let compAnswer = Math.random();
      if (compAnswer < 0.33) {
        this.computerChoice = "rock";
      } else if (compAnswer <= 0.66) {
        this.computerChoice = "paper";
      } else {
        this.computerChoice = "scissors";
      }
    }
  },
  beforeMount() {
    this.compChoice();
  }
});
