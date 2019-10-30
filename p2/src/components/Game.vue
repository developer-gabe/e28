<template>
  <button
    class="card"
		:id="itemID"
    @click="activeChoice = '{{itemID}}'; playerChoice = '{{itemID}}';"
    :class="{isActive: activeChoice === '{{itemID}}' }"
  >{{itemName}}</button>
</template>

<script>
export default {
  data() { return {
		itemID: null,
		itemName: null
  } }
};
</script>