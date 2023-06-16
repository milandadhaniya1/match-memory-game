<script setup lang="ts">
import { gameStore } from '@/stores/game'
import { configStore } from '@/stores/config'

const game = gameStore()
const config = configStore()

// Initial board size 4
game.setBoardSize(4)
const boardSizeOptions = config.boardSizeOptions

const setBoardSize = (event: any) => {
  game.setBoardSize(parseInt(event.target.value))
}
</script>

<template>
  <select @change="setBoardSize($event)" class="select-game-difficulty">
    <option v-for="(item, index) in boardSizeOptions" :key="item" :value="index">
      {{ item }}
    </option>
  </select>
</template>

<style scoped>
.select-game-difficulty {
  border-radius: 3px;
  padding: 10px;
  text-transform: uppercase;
  color: #ab55f3;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  border: none;
}
</style>
