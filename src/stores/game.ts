import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { configStore } from '@/stores/config'

const config = configStore()

export const gameStore = defineStore('game', () => {
  const iconMatrix: Array<object> = reactive([])

  const setBoardSize = (bSize: number) => {
    config.boardSize = bSize
    getRandomMatrixIcons((bSize * bSize) / 2)
  }

  const startGame = () => (config.isGameStarted = true)

  const getRandomMatrixIcons = (numberofIcons: number) => {
    //Remove all items from icon matrix
    iconMatrix.splice(0, iconMatrix.length);
    let selectedIcons = []
    let shuffled = [...config.icons].sort(() => 0.5 - Math.random())
    selectedIcons.push(...shuffled.slice(0, numberofIcons))
    let randomMatrixIcons = [...selectedIcons, ...selectedIcons]
    randomMatrixIcons.sort(() => 0.5 - Math.random())

    randomMatrixIcons.forEach((e) => {
      iconMatrix.push({ name: e, open: false, matched: false })
    })
  }

  const updateIconMatrix = (index: number, status: boolean) => {
    iconMatrix.map((e, i) => {
      if (i === index) {
        e.open = status
      }
      return e
    })
  }

  const winGame = () => {
    config.isGameStarted = false
    config.isWinner = true
  }

  return { setBoardSize, startGame, iconMatrix, updateIconMatrix, winGame }
})
