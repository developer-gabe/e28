<template>
	<div>
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
  data() {
    return {
    };
  }
};
</script>