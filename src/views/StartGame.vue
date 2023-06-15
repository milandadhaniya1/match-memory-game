<script setup lang="ts">
import { gameStore } from '@/stores/game'
import { configStore } from '@/stores/config'
import router from '@/router/index'
const game = gameStore();
const config = configStore();

const boardSizeOptions = config.boardSizeOptions;

// Initial board size 4
game.setBoardSize(4);

const startGame = () => {
  game.startGame();
  router.push({ path: '/game' })
}

const setBoardSize = (event: any) => { console.log(parseInt(event.target.value));game.setBoardSize(parseInt(event.target.value))};

// if(config.isGameStarted && config.boardSize !== 0) {
//   router.push({ path: '/game' })
// }

</script>

<template>
  <div class="w-full md:w-auto">
    <div class="flex flex-wrap justify-center mt-10">
      <select @change="setBoardSize($event)">
        <option v-for="(item, index) in boardSizeOptions" :key="item" :value="index">
          {{ item }}
        </option>
      </select>
    </div>
    <div class="flex flex-wrap justify-center mt-10">
      <button class="rounded-full drop-shadow-md bg-sky-500 w-16" @click="startGame()">Play</button>
    </div>
  </div>
</template>
