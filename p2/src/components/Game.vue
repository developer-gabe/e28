<template>
  <div class="grid">
    <button
      class="card"
      id="rock"
      @click="$root.playerChoice = 'rock'; rockActive = true; paperActive = false; scissorsActive = false"
			:class="{'active': rockActive}"
    >Rock</button>
    <button
      class="card"
      id="paper"
      @click="$root.playerChoice = 'paper'; rockActive = false; paperActive = true; scissorsActive = false"
			:class="{'active': paperActive}"
    >Paper</button>
    <button
      class="card"
      id="scissors"
      @click=" $root.playerChoice = 'scissors'; 'changeActive'; rockActive = false; paperActive = false; scissorsActive = true"
			:class="{'active': scissorsActive}"
    >Scissors</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
			rockActive: null,
			scissorsActive: null,
			paperActive: null
    }
	},
	methods: {
		changeActive: function() {
			$root.active = true;
		}
	}
};
</script>

<style scoped>
#rock {
  opacity: 0;
  color: #fff;
	border: 3px solid #cb42cf;
	background: #fff1;
  animation: intro 0.5s ease-in-out 0.3s 1 forwards;
}

#paper {
  opacity: 0;
  color: #fff;
	border: 3px solid #fc4a1a;
	background: #fff1;
  animation: intro 0.5s ease-in-out 0.6s 1 forwards;
}

#scissors {
  opacity: 0;
  color: #fff;
	border: 3px solid #da950b;
	background: #fff1;
  animation: intro 0.5s ease-in-out 0.9s 1 forwards;
}

.active {
  transform: scale(1.08);
  box-shadow: 0 14px 28px #00000040, 0 10px 10px #00000038;
}
</style>