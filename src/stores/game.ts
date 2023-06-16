import { reactive } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router/index'
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
    iconMatrix.splice(0, iconMatrix.length)
    const selectedIcons = []
    const shuffled = [...config.icons].sort(() => 0.5 - Math.random())
    selectedIcons.push(...shuffled.slice(0, numberofIcons))
    const randomMatrixIcons = [...selectedIcons, ...selectedIcons]
    randomMatrixIcons.sort(() => 0.5 - Math.random())

    randomMatrixIcons.forEach((e) => {
      iconMatrix.push({ name: e, open: false, matched: false })
    })
  }

  const updateIconMatrix = (index: number, status: boolean, matched: boolean) => {
    if (matched) return

    const openUnmachedObj = iconMatrix.filter((e) => e.open === true && e.matched === false)

    iconMatrix.map((e, i) => {
      if (i === index) {
        e.open = status

        if (status === false) return

        if (openUnmachedObj.length === 1 && openUnmachedObj[0].name === e.name) {
          // Matched
          e.matched = true
          openUnmachedObj[0].matched = true
        } else if (openUnmachedObj.length === 1) {
          // Unmatched
          setTimeout(() => {
            e.open = false
            openUnmachedObj[0].open = false
          }, 500)
        } else if (openUnmachedObj.length === 2) {
          // If user select more than two within 500 ms - do notthing
        }
      }
      return e
    })

    checkForWin()
  }

  const checkForWin = () => {
    const allMatched = iconMatrix.every((item) => item.matched === true)
    if (allMatched === true) winGame()
  }

  const winGame = () => {
    config.isGameStarted = false
    config.isWinner = true
    setTimeout(() => {
      alert('Congratulations!! You did it.. \nClick ok to start new game!!')
      router.push({ path: '/' })
    }, 500)
  }

  return { setBoardSize, startGame, iconMatrix, updateIconMatrix, winGame }
})
