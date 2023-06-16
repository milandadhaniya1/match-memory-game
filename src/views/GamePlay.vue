<script setup lang="ts">
import { reactive, shallowRef } from 'vue'
import router from '@/router/index'
import { gameStore } from '@/stores/game'
import { configStore } from '@/stores/config'
import IconCard from '@/components/IconCard.vue'
import * as icons from '@/components/AllIcons'

const game = gameStore()
const config = configStore()

//If game not started redirect to home page
if (!config.isGameStarted || config.boardSize === 0) {
  router.push({ path: '/' })
}

const boardSize = config.boardSize
const iconMatrixStore = shallowRef(reactive(game.iconMatrix))

const generateIconComponent = (row: number, clm: number) => {
  const index = (row - 1) * boardSize + clm - 1
  let iconCompName: string = ''

  if (iconMatrixStore.value[index]?.open) {
    iconCompName = iconMatrixStore.value[index]?.name
  } else {
    iconCompName = 'defaulticon'
  }

  const iconComp = icons[iconCompName]

  return {
    index: index,
    component: iconComp,
    compName: iconMatrixStore.value[index]?.name,
    open: iconMatrixStore.value[index]?.open || false,
    matched: iconMatrixStore.value[index]?.matched || false
  }
}

const flipCard = (comp: any) => {
  game.updateIconMatrix(comp.index, !comp.open, comp.matched)
}
</script>

<template>
  <div class="flex flex-wrap h-screen items-center justify-center">
    <table border="0" class="max-w-xl max-h-min">
      <tr v-for="row in boardSize" :key="row" class="flex">
        <td v-for="clm in boardSize" :key="clm" class="flex-col card-box w-full h-full">
          <IconCard
            :is-open="generateIconComponent(row, clm).open"
            :is-matched="generateIconComponent(row, clm).matched"
            @click="flipCard(generateIconComponent(row, clm))"
          >
            <component :is="generateIconComponent(row, clm).component" />
          </IconCard>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.card-box {
  max-width: 80px;
}
</style>
