<script setup lang="ts">
import { gameStore } from '@/stores/game'
import router from '@/router/index'
import StartGameButton from '@/components/StartGameButton.vue'
import StartGameSelectDifficulty from '@/components/StartGameSelectDifficulty.vue'

const game = gameStore()

const startGame = () => {
  game.startGame()
  router.push({ path: '/game' })
}
</script>

<template>
  <div class="flex flex-col h-screen items-center justify-center">
    <div>
      <h1 class="game-title">Memory Match Game</h1>
    </div>
    <div class="mt-10">
      <start-game-select-difficulty />
    </div>
    <div>
      <start-game-button @startGame="startGame()" class="mt-10" />
    </div>
  </div>
</template>

<style scoped>
.game-title {
  font-family: 'Roboto', sans-serif;
  font-size: 48px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgb(255 255 255);
  -webkit-background-clip: text;
  display: inline-block;
  background-clip: text;
  -webkit-background-clip: text;
  text-align: center;
}
</style>
