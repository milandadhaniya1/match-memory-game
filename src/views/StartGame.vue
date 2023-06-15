<script setup lang="ts">
import { gameStore } from '@/stores/game'
import { configStore } from '@/stores/config'
import router from '@/router/index'
const game = gameStore();
const config = configStore();

const boardSizeOptions = config.boardSizeOptions;

const startGame = () => {
  game.setBoardSize(8);
  game.startGame();
  router.push({ path: '/game' })
}

// if(config.isGameStarted && config.boardSize !== 0) {
//   router.push({ path: '/game' })
// }

</script>

<template>
  <div class="flex">
    <button @click="startGame()">Play</button>
  </div>
</template>
