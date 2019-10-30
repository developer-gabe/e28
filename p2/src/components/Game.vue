<template>
	<div class="grid">
  <button
    class="card"
    id="rock"
    @click="$root.activeChoice = 'rock'; $root.playerChoice = 'rock';"
    :class="{isActive: activeChoice === 'rock' }"
  >Rock</button>
	  <button
    class="card"
    id="paper"
    @click="$root.activeChoice = 'paper'; $root.playerChoice = 'paper';"
    :class="{isActive: activeChoice === 'paper' }"
  >Paper</button>
	  <button
    class="card"
    id="scissors"
    @click="$root.activeChoice = 'scissors'; $root.playerChoice = 'scissors';"
    :class="{isActive: activeChoice === 'scissors' }"
  >Scissors</button>
	</div>

</template>

<script>
export default {
}
</script>

<style scoped>
#rock {
  opacity: 0;
  background: #e9724c;
  border: 3px solid #c96341;
  animation: intro 0.5s ease-in-out 0.3s 1 forwards;
}

#paper {
  opacity: 0;
  background: #0fa3b1;
  border: 3px solid #0a7781;
  animation: intro 0.5s ease-in-out 0.6s 1 forwards;
}

#scissors {
  opacity: 0;
  background: #ffc857;
  border: 3px solid #da950b;
  animation: intro 0.5s ease-in-out 0.9s 1 forwards;
}

.isActive {
  transform: scale(1.08);
  box-shadow: 0 14px 28px #00000040, 0 10px 10px #00000038;
}
</style>